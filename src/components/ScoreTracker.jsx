
export default function ScoreTracker({ imgUrl, title, count }) {
  return (
    <div
      className="relative w-full h-full font-logo rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize:"cover",
         backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
    <div className="absolute inset-0 flex flex-col text-left px-4">
      <h1 className="text-[64px] font-bold">{String(count).padStart(2, "0")}</h1>
      <h2 className="text-[20px]">{title}</h2>
      </div>
    </div>
  );
}
