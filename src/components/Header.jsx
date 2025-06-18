import logo from "/Logo.png";
import settings from "/Settings Icon.png";
// import '../index.css'
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-5 lg:px-0 mx-auto max-w-[990px]">
        {/* Top Bar */}
        <div className="flex justify-between items-center w-full mt-8">
          <div className="flex items-center font-logo gap-3 font-semibold text-sm sm:text-base lg:text-2xl">
            <img
              src={logo}
              alt="App logo"
              className="w-5 sm:w-6 lg:w-8"
              width="33"
              height="40"
            />
            <p>Character Counter</p>
          </div>
          <div>
            <img src={settings} alt="Settings logo" className="w-5 h-5" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-6 font-logo font-bold text-2xl sm:text-3xl lg:text-[64px] leading-tight min-w-[253px] max-w-[545px] md-full w-[60%] text-pretty md:text-wrap">
          <h1>Analyze your text in real-time.</h1>
        </div>
      </div>
    </>
  );
}
