import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flexBetween gap-10 sm:flex-row flex-col">
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="capitalize leading-tight text-5xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-b from-blue-600 to-indigo-900 bg-clip-text text-transparent">
          better design for your digital products.
        </h1>
        <p>
          Turning your idea into Reality. We bring together the terms for the
          global tech industry.
        </p>
        <Button title="See Our Works" link={"/portfolio"} />
      </div>

      <div className="flex-1">
        <Image
          src={"/heroImg.avif"}
          width={500}
          height={500}
          alt="digital product"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
