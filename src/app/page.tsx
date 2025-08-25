import React from "react";
import Caption from "./component/caption";
import { Carter_One } from "next/font/google";

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
        <img src="/book.svg" alt="" className="absolute right-[10%]" />
        <img src="/swish.svg" alt="" className="absolute right-[30%]" />
      </div>
    </div>
  );
}
