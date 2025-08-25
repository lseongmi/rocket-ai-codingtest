import React from "react";
import MainImg from "./mainimg";
import Chatting from "./chatting";
import Title from "./title";

export default function Caption() {
  return (
    <div>
      <Title />
      <MainImg />
      <Chatting
        text={`이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요.`}
      />
    </div>
  );
}
