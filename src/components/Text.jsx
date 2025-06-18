import { AlertCircle } from "lucide-react";

export default function Text({ charLimit, error, excludeSpace, setExcludeSpace, limitCharacters, setCharLimit, setLimitCharacters, wordCount }) {
  const readingTimeInSeconds = Math.max(1, Math.round((wordCount / 200) * 60));
  const minutes = Math.floor(readingTimeInSeconds / 60);
  const seconds = readingTimeInSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  return (
    <>
      <div className="w-full max-w-[990px] lg:px-0 px-4 mx-auto mt-2">
        <p className="text-orange-500 flex gap-2 items-center font-logo text-[16px]">
          {error ? (
            <>
              <AlertCircle size={14} />
              Limit reached! Your text exceeds {charLimit} characters
            </>
          ) : null}
        </p>
      </div>

      <div className="flex flex-col md:flex-row text-white mt-5 justify-between w-full max-w-[990px] px-4 lg:px-0 m-auto gap-3 sm:gap-0 ">
        <div className="flex flex-col md:flex-row gap-2 md:gap-7 h-auto md:h-[29px] md:items-center items-start ">
          <label className="flex gap-2 items-center ">
            <input
              className=" rounded-md h-[16px] w-[16px] accent-purple-300 hover:accent-purple-400  bg-neutral-200 shadow-[inset_0_0_2px_#E4E4EF,0_0_5px_#7c3aed66] cursor-pointer"
              type="checkbox"
              checked={excludeSpace}
              onChange={() => setExcludeSpace(!excludeSpace)}
            />
            <span>Exclude Spaces</span>
          </label>

          <label className="flex gap-2 items-center">
            <input
              className=" rounded-md h-[16px] w-[16px] accent-purple-300 hover:accent-purple-400 bg-neutral-200 shadow-[inset_0_0_2px_#E4E4EF,0_0_5px_#7c3aed66] cursor-pointer"
              type="checkbox"
              checked={limitCharacters}
              onChange={() => setLimitCharacters(!limitCharacters)}
            />
            <span>Set Character Limit</span>
          </label>

          <input
            className="px-2 py-2 border-none outline-none w-[55px] h-[29px] bg-[#404254] text-[#FFFFFF] appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none rounded-md font-logo text-[16px]"
            type="number"
            value={charLimit}
            hidden={!limitCharacters}
            onChange={(e) => setCharLimit(e.target.value)}
          />
        </div>
        <p>Approx. reading time: {formattedTime}</p>
      </div>
    </>
  );
}
