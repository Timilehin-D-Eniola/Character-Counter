import StatsContainer from "/Stat Container.png";
import StatsContainer2 from "/Stat Container 2.png";
import StatsContainer3 from "/Stat Containerrr.png";
import ScoreTracker from "./ScoreTracker";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Stats({ charCount, wordCount, sentenceCount, text }) {
  const [letterStats, setLetterStats] = useState({});
  const [showAll, setShowAll] = useState(false);

  const sortedEntries = Object.entries(letterStats).sort((a, b) => b[1] - a[1]);
  const entriesToShow = showAll ? sortedEntries : sortedEntries.slice(0, 5);

  useEffect(() => {
    const frequency = {};
    const letters = text.toLowerCase().replace(/[^a-z]/g, "");
    for (let letter of letters) {
      frequency[letter] = (frequency[letter] || 0) + 1;
    }
    setLetterStats(frequency);
  }, [text]);

  const totalLetters = text.replace(/[^a-zA-Z]/g, "").length;

  const scoreContainers = [
    { title: "Total Characters", imgUrl: StatsContainer, count: charCount },
    { title: "Word Count", imgUrl: StatsContainer3, count: wordCount },
    { title: "Sentence Count", imgUrl: StatsContainer2, count: sentenceCount },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-10 max-w-[990px] w-full mx-auto text-black h-[422px] md:h-[150px] lg:h-[150px] px-4 lg:px-0">
        {scoreContainers.map((el, index) => (
          <ScoreTracker
            key={index}
            imgUrl={el.imgUrl}
            title={el.title}
            count={el.count}
          />
        ))}
      </div>

      <div className="font-logo max-w-[990px] w-full  mx-auto px-4 lg:px-0 ">
        <p className="h-[31px] font-semibold text-[24px] text-white">
          Letter Density
        </p>

        {entriesToShow.length === 0 ? (
          <p className="text-[16px] text-white pt-3">
            No characters found. Start typing to see letter density.
          </p>
        ) : (
          <div className="space-y-3 w-full pt-3">
            {entriesToShow.map(([letter, count]) => {
              const percentage = ((count / totalLetters) * 100).toFixed(1);
              return (
                <div
                  key={letter}
                  className="flex items-center gap-2 w-full m-auto py-2"
                >
                  <span className="text-white w-[20px] min-w-[20px]">
                    {letter.toUpperCase()}
                  </span>
                  <div className="relative flex-1 h-[12px] bg-white/10 rounded-md overflow-hidden">
                    <div
                      className="bg-purple-400 h-full absolute top-0 left-0"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-white w-[40px] text-right">
                    {count}
                  </span>
                  <span className="text-white w-[50px]">({percentage}%)</span>
                </div>
              );
            })}

            {sortedEntries.length > 5 && (
              <button
                className="mt-4 text-sm text-white font-logo flex gap-1 cursor-pointer items-center "
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "See less" : "See more"}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showAll ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
