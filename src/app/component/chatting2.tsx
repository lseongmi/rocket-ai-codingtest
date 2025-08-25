type textProps = {
  text: string;
};

export default function Chatting2({ text }: textProps) {
  return (
    <div className=" w-full max-w-[448px] mx-auto absolute top-[26%]">
      <img src="/chating2.svg" alt="채팅" className="w-[72%] relative " />
      <div
        className="absolute z-10 top-[32%] left-[14%] 
                   whitespace-pre-wrap text-center
                   text-[clamp(0.75rem,4vw,1.25rem)]"
      >
        {text}
      </div>
    </div>
  );
}
