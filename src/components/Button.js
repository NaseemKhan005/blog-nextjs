import Link from "next/link";
import React from "react";

const Button = ({ link, title }) => {
  return (
    <Link
      href={link}
      className="w-fit p-3 text-white bg-blue-600 hover:bg-blue-700 rounded font-semibold text-sm capitalize"
    >
      {title}
    </Link>
  );
};

export default Button;
