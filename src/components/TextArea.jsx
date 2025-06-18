import Stats from "./Stats";
import { useState } from "react";

import Text from "./Text";

export default function () {
  const [text, setText] = useState("");
  const [excludeSpace, setExcludeSpace] = useState(false);
  const [limitCharacters, setLimitCharacters] = useState(false);
  const [charLimit, setCharLimit] = useState("");


  const handleChange = (event) => {
    const newText = event.target.value;
    if (limitCharacters && newText.length > Number(charLimit)) return;
    setText(newText);
  };

  const charCount = excludeSpace ? text.replace(/\s/g, "").length : text.length;

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const sentenceCount = text
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim().length > 0).length;

  let error = false;
  if (limitCharacters && charLimit && charCount >= Number(charLimit)) {
    error = true;
  }

  return (
    <>
       <div className="flex justify-center items-center pt-4 lg:pt-0 px-4 lg:px-0">
        <textarea
          className={`w-full md:max-w-[990px] h-[237px] bg-[#21222C] text-[#E4E4EF] p-[20px]  cursor-pointer rounded-xl outline-none ${
            error ? "border border-orange-500" : "focus:border-2 focus:border-purple-300"
          }`}
          value={text}
          onChange={handleChange}
          placeholder="Start typing here...(or paste your text)"
        />
      </div>

      <Text
        charLimit={charLimit}
        error={error}
        excludeSpace={excludeSpace}
        setExcludeSpace={setExcludeSpace}
        limitCharacters={limitCharacters}
        setCharLimit={setCharLimit}
        setLimitCharacters={setLimitCharacters}
         wordCount={wordCount}
      />
      <Stats
        charCount={charCount}
        wordCount={wordCount}
        sentenceCount={sentenceCount}
        text={text}
      />
    </>
  );
}
