import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section>
      <h2 className="text-center font-bold text-3xl mb-10 md:mb-auto sm:text-4xl">
        Let's Keep in Touch
      </h2>
      <div className="flexBetween gap-5 md:gap-10 md:flex-row flex-col">
        <div className="flex-1">
          <Image
            src={"/design.png"}
            width={500}
            height={500}
            alt="contact image"
          />
        </div>

        <form className="flex-1 flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 p-3 rounded w-full outline-indigo-500"
          />
          <input
            type="emial"
            placeholder="Your Email"
            className="border-2 p-3 rounded w-full outline-indigo-500"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="border-2 p-3 rounded w-full outline-indigo-500"
          ></textarea>
          <Button title="send" link="contact" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
