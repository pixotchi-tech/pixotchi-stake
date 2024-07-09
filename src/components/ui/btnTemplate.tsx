import React from "react";
import Image from "next/image";
import { BtnBlue, BtnNavy  } from "../../../public/icons";

export default function BtnTemplate({logo = BtnNavy, text, action, lightText = true, redText = false, extraClass} : any) {

 
  return (
    <div className={`relative ${extraClass}`}  onClick={() => action()}>
        <Image alt="" src={logo}  />
        <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         text-xs md:text-xl lg:text-xl
         ${lightText? "text-white" : redText? "text-red-500" : ""}`} >
            {text}
        </h1>
    </div>
  );
}
