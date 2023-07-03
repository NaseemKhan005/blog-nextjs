"use client";
import { NabLinks } from "@/utils/NavLinks";
import Link from "next/link";
import React, { useContext, useState } from "react";
import ToggleButton from "./ToggleButton";
import { HiMiniBars2, HiXMark } from "react-icons/hi2";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode } = useContext(ThemeContext);

  return (
    <div className="flexBetween py-5 mb-10 ">
      <div>
        <Link href={"/"} className="text-2xl font-semibold">
          <span className="text-blue-600">N</span>aseem.
        </Link>
      </div>

      <div className="flex">
        <ul
          className={`${mode === "light" ? "bg-white" : "bg-[#111]"} ${
            isOpen === true ? "left-0" : "-left-full md:left-0"
          } transition-all md:flexBetween z-50 flex gap-6 md:gap-5 capitalize md:relative absolute top-0 md:w-fit md:h-auto w-full h-screen md:flex-row flex-col p-10 md:p-0`}
        >
          {NabLinks.map(({ id, name, link }) => (
            <li key={id} className="first:mt-12 md:first:mt-0">
              <Link href={link}>{name}</Link>
            </li>
          ))}
          <ToggleButton />
          <HiXMark
            className="cursor-pointer text-2xl md:hidden absolute top-10 left-10"
            onClick={() => setIsOpen(false)}
          />
        </ul>
        <HiMiniBars2
          className="cursor-pointer text-2xl md:hidden"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;
