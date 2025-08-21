type textProps = {
  text: String;
};

export default function Chatting({ text }: textProps) {
  return (
    <div className="">
      <div className="">
        <img
          src="/chating.svg"
          alt="채팅"
          className="absolute top-[80%] w-[70%] "
        />
        <div
          className="absolute z-10 top-[91%] left-[21%]
                   whitespace-pre-wrap text-center"
        >
          {text}
        </div>
      </div>
    </div>
  );
}
