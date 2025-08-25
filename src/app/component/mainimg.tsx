export default function MainImg() {
  return (
    <div className="max-w-[448px] relative max-w-[448px] w-full">
      <div className="absolute top-[0%] left-0 h-[25%] w-full bg-gradient-to-b from-black to-black/0"></div>
      <img src="/titleimg.svg" alt="" className="w-full" />
      <div className="absolute top-[82%] left-0 h-[18%] w-full bg-gradient-to-t from-white to-white/0"></div>
    </div>
  );
}
