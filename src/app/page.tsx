import React from "react";
import Caption from "./component/caption";
import { Carter_One } from "next/font/google";
import Chatting2 from "./component/chatting2";

export default function home() {
  return (
    <div className="bg-[#F3F2EF] min-h-screen">
      <div className="relative">
        <Caption />
      </div>
      <div className="mt-[20%] bg-[#F3F2EF] min-h-screen flex justify-center">
        <img
          src="/Groupdesign.svg"
          alt=""
          className="absolute left-[0%] pt-[30%]"
        />
        <div>
          <img src="/book.svg" alt="" className="absolute right-[10%]" />
          <img src="/swish.svg" alt="" className="absolute right-[30%]" />
        </div>
        <div className="w-full max-w-[448px] relative">
          <Chatting2 text={`제가 oo님의 사주를\n보기 쉽게 표로 정리했어요`} />
          <img src="/humanimg.svg" alt="" className="w-full mt-86" />
        </div>
      </div>
    </div>
  );
}
