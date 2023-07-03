"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const ToggleButton = () => {
  const { toggleMode, mode } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleMode}
      className="flexBetween w-[2.7rem] gap-[.3rem] border border-neutral-300 rounded-full relative p-1 text-sm"
    >
      <span>
        <BsSun />
      </span>
      <span>
        <BsMoon />
      </span>
      <span
        className={`${
          mode === "dark" ? "left-[2px]" : "right-[2px]"
        } bg-blue-600 block w-[1.1rem] h-[1.1rem] rounded-full absolute transition-all`}
      ></span>
    </button>
  );
};

export default ToggleButton;
