import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <section>
      <h1 className="text-5xl text-center font-bold">Our Work</h1>
      <h2 className="text-3xl text-center font-semibold my-5 text-blue-600">
        Choose a gallery
      </h2>
      <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Link
          href={"/portfolio/illustrations"}
          className="relative block w-full h-80 cursor-pointer"
        >
          <div className="w-full h-full bg-[#00000041] absolute top-0 left-0"></div>
          <Image
            src={"/single-product.avif"}
            width={500}
            height={500}
            alt="gallery1"
            className="object-contain w-full h-full"
          />
          <h2 className="text-2xl font-bold absolute bottom-5 right-5 text-white">
            Illustrations
          </h2>
        </Link>

        <Link
          href={"/portfolio/websites"}
          className="relative block w-full h-80 cursor-pointer"
        >
          <div className="w-full h-full bg-[#00000041] absolute top-0 left-0"></div>
          <Image
            src={"/creative-portfolio.avif"}
            width={500}
            height={500}
            alt="gallery1"
            className="object-contain w-full h-full"
          />
          <h2 className="text-2xl font-bold absolute bottom-5 right-5 text-white">
            Websites
          </h2>
        </Link>

        <Link
          href={"/portfolio/application"}
          className="relative block w-full h-80 cursor-pointer"
        >
          <div className="w-full h-full bg-[#00000041] absolute top-0 left-0"></div>
          <Image
            src={"/creative-website.avif"}
            width={500}
            height={500}
            alt="gallery1"
            className="object-contain w-full h-full"
          />
          <h2 className="text-2xl font-bold absolute bottom-5 right-5 text-white">
            Application
          </h2>
        </Link>

        <Link
          href={"/portfolio/designs"}
          className="relative block w-full h-80 cursor-pointer"
        >
          <div className="w-full h-full bg-[#00000041] absolute top-0 left-0"></div>
          <Image
            src={"/design.png"}
            width={500}
            height={500}
            alt="gallery1"
            className="object-contain w-full h-full"
          />
          <h2 className="text-2xl font-bold absolute bottom-5 right-5 text-white">
            Designs
          </h2>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
