type textProps = {
  text: String;
};

export default function Chatting({ text }: textProps) {
  return (
    <div>
      <div>
        <img
          src="/chating.svg"
          alt="채팅"
          className="absolute top-[80%] w-[70%] "
        />
        <div
          className="absolute z-10 top-[91%] left-[18%]
                   whitespace-pre-wrap text-center
                   text-[clamp(0.75rem,4vw,1.25rem)]"
        >
          {text}
        </div>
      </div>
    </div>
  );
}
