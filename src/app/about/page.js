import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="relative w-full h-80 md:h-96">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-[#000000c6] to-[#000000cd] z-[1]"></div>
        <Image
          src={"/2.png"}
          width={500}
          height={500}
          alt="about image"
          className="relative w-full h-full object-cover object-center"
        />
        <div className="absolute text-center sm:text-left bottom-4 left-1 md:bottom-10 md:left-10 text-white z-10 capitalize font-bold">
          <h2 className="text-3xl">digital storytellers</h2>
          <h3 className="text-lg sm:text-xl mt-2">
            handcrafting award winning digital experiences
          </h3>
        </div>
      </div>

      <div className="flex item-start md:flex-row flex-col gap-14">
        <div className="text-sm flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Who We Are?</h2>
          <p>
            If you're wondering how to automatically generate the 50-950 shades
            of your own custom colors, bad news — color is complicated and
            despite trying dozens of different tools, we've yet to find one that
            does a good job generating color palettes like this automatically.
          </p>
          <p>
            We picked all of Tailwind's default colors by hand, meticulously
            balancing them by eye and testing them in real designs to make sure
            we were happy with them.
          </p>
          <p>
            Two useful tools we can recommend are Palettte and ColorBox — they
            won't do the work for you but their interfaces are well-designed for
            doing this sort of work.
          </p>
        </div>

        <div className="text-sm flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Who We Are?</h2>
          <p>
            If you're wondering how to automatically generate the 50-950 shades
            of your own custom colors, bad news — color is complicated and
            despite trying dozens of different tools, we've yet to find one that
            does a good job generating color palettes like this automatically.
          </p>
          <p>
            We picked all of Tailwind's default colors by hand, meticulously
            balancing them by eye and testing them in real designs to make sure
            we were happy with them.
          </p>
          <p>
            Two useful tools we can recommend are Palettte and ColorBox — they
            won't do the work for you but their interfaces are well-designed for
            doing this sort of work.
          </p>
          <Button title="Contact" link="/contact" />
        </div>
      </div>
    </section>
  );
};

export default About;
