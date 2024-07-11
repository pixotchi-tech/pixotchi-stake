import React from "react";
import Image from "next/image";
import { BtnBlue, BtnNavy  } from "../../../public/icons";

export default function BtnTemplate2({logo = BtnNavy, text} : any) {

 
  return (
      <div className={`relative w-1/3`}>
          <Image alt="" src={logo}  />
          <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          text-xs md:text-sm lg:text-sm text-white hover:cursor-pointer`} >
              {text}
          </h1>
      </div>
  );
}
