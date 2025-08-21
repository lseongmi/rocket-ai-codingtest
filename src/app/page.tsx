import React from "react";
import MainImg from "./component/mainimg";
import Chatting from "./component/chatting";
import Title from "./component/title";

export default function home() {
  return (
    <div className="bg-[##F3F2EF] relative">
      <Title />
      <MainImg />
      <Chatting
        text={`이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요.`}
      />
    </div>
  );
}
