import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
  console.log(params);
  return (
    <section>
      <h1 className="text-6xl font-bold">Our Work</h1>
      <h2 className="text-3xl font-semibold my-2 capitalize text-blue-600">
        {params.category}
      </h2>

      <div className="flexBetween gap-10 my-10 flex-col md:flex-row">
        <div className="md:flex-1 flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Create Portfolio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button title="See More" link={"/portfolio"} />
        </div>
        <div className="md:flex-1 w-full md:w-fit">
          <Image
            src={"/creative-portfolio.avif"}
            width={500}
            height={500}
            alt="create porfolio"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flexBetween gap-10 my-10 flex-col md:flex-row-reverse">
        <div className="md:flex-1 flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Minimal Single Product</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button title="See More" link={"/portfolio"} />
        </div>
        <div className="md:flex-1 w-full md:w-fit">
          <Image
            src={"/single-product.avif"}
            width={500}
            height={500}
            alt="minimal single product"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flexBetween gap-10 my-10 flex-col md:flex-row">
        <div className="md:flex-1 flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Strong Together Charity</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button title="See More" link={"/portfolio"} />
        </div>
        <div className="md:flex-1 w-full md:w-fit">
          <Image
            src={"/creative-website.avif"}
            width={500}
            height={500}
            alt="Strong Together Charity"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Category;
