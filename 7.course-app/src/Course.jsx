import React from "react";

function Course({ course }) {
  const { id, title, description, price, link, image } = course;

  return (
    <div className="border rounded-md px-3 flex items-center justify-center py-4 ">
      <div className="space-y-6">
        <img className="w-[200px] h-[150px] mx-auto" src={image} />
        <h4 className="text-center font-bold">{title}</h4>
        <h5 className="text-sm py-3">{description}</h5>
        <h3 className="font-bold text-right pr-3">{price}</h3>
        <a className="text-blue-500" href={link}>
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default Course;
