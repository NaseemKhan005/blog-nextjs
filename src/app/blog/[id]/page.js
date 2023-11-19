import React from "react";

const page = ({ params }) => {
  return (
    <section>
      <h1>{params.id}</h1>
    </section>
  );
};

export default page;
