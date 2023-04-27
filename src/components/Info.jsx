import { useState, useRef, useEffect } from "react";

const Info = ({ description, label, options }) => {
  const [style, setStyle] = useState({
    display: "none",
    pointerEvents: "none",
  });

  return (
    <div className="flex items-center relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        style={{ fill: "rgba(168, 202, 221, 1)" }}
        className="ml-2 cursor-pointer"
        onMouseEnter={(e) => {
          setStyle({ display: "block", pointerEvents: "none" });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none", pointerEvents: "none" });
        }}
      >
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
      </svg>
      <div
        className="absolute bg-white p-5 text-white text-base rounded-lg border-2 border-blue-100 z-10 w-80 left-1"
        style={style}
      >
        {label}
        <div className="divider m-0"></div>
        <div className="text-sky-700">
          {description}
          {options?.map((option, index) => {
            return option.description ? (
              <div key={index}>
                {option.label} : {option.description}
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
