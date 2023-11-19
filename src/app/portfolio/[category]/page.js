import Button from "@/components/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <section>
      <h1 className="text-6xl font-bold">Our Work</h1>
      <h2 className="text-3xl font-semibold my-2 capitalize text-blue-600">
        {params.category}
      </h2>

      {data.map((item) => (
        <div
          key={item.id}
          className="flexBetween gap-10 my-10 flex-col-reverse md:even:flex-row-reverse md:odd:flex-row"
        >
          <div className="md:flex-1 flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold">{item.title}</h2>
            <p>{item.desc}</p>
            <Button title="See More" link={"/portfolio"} />
          </div>
          <div className="md:flex-1 w-full md:w-fit">
            <Image
              src={item.image}
              width={500}
              height={500}
              alt={item.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Category;
