export default function Title() {
  return (
    <div className="absolute flex flex-col items-center z-10 text-center top-[14%] left-[clamp(34%,15vw,20%)]">
      <div className="text-white mb-2 text-[clamp(0.75rem,4vw,1.25rem)]">
        제 1장
      </div>
      <img
        src="/designimg.svg"
        alt=""
        className="w-full h-auto max-w-[448px]"
      />
      <div className="text-white mt-2 text-[clamp(0.75rem,4vw,1.25rem)]">
        나의 사주 팔자
      </div>
    </div>
  );
}
