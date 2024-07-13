import React, {useState} from "react";

export default function BtnTemplate({text, action, disabled = false} : any) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseColor = "#2d3c53";
  const hoverColor = "#3a4d6a";
  const pressColor = "#1c2636";
 
  return (
    <button
      className="relative inline-block"
      onClick={() => action()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      disabled={disabled}
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 518.25 177.749994"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-auto"
    >
      <path
        d="M443.305 177.547h14.793v-14.797h29.59v-14.793h14.792V118.37h14.793V59.2h-14.793V29.61h-14.793V14.816h-29.59V.023H58.672v14.793h-29.586v14.793H14.293V59.2H-.5v59.17h14.793v29.587h14.793v14.793h29.586v14.797z"
        fill="#000000"
      />
      <path
        d="M443.305 162.75h14.793v-14.793h29.59V118.37h14.792V59.2h-14.793V29.61h-29.59V14.816H58.672v14.793H29.086V59.2H14.293v59.17h14.793v29.587h29.586v14.793z"
        fill={isPressed ? pressColor : isHovered ? hoverColor : baseColor}
      />
      <path
        d="M443.305 162.75h14.793v-14.793h29.59V118.37h14.792V73.992h-14.793V59.2h-14.793V44.406H43.88V59.2H29.086v14.793H14.293v44.383h14.793v29.586h29.586v14.793h384.633z"
        fill={isPressed ? pressColor : isHovered ? hoverColor : baseColor}
      />
      <path
        d="M443.305 162.75h14.793v-14.793h29.59V118.37h14.792V88.785h-14.793v29.586h-14.793v14.793h-29.59v14.793H73.47v-14.793H43.88V118.37H29.086V88.785H14.293v29.586h14.793v29.586h29.586v14.793z"
        fill="#18313b"
      />
      <path
        d="M14.293 73.992h14.793V59.2h14.793V44.406h29.59V29.61h29.586V14.816H58.672v14.793H29.086V59.2H14.293z"
        fill="#a7c7e7"
      />
      <path d="M492.202 167.611v-4h4v4z" fill="#ffffff" />
    </svg>
    <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
        <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
         text-xs md:text-md lg:text-md hover:cursor-pointer`} >
            {text}
        </h1>
    </span>
  </button>
  );
}
