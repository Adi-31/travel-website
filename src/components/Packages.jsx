import React from "react";
import { details, packages } from "../constants";

const Packages = () => {
  return (
    <section className="bg-slate-100 flex flex-col items-center w-full md:p-6 p-3">
      {/* Title  */}
      <h2 className="text-black text-center font-poppins font-semibold mt-5 text-[30px] md:text-[45px]">
        Best Packages For You
      </h2>
      {/* packages list  */}
      <div className="text-black grid grid-rows-3 grid-flow-col md:flex md:flex-row md:w-full md:justify-evenly gap-4 mt-5">
        {packages.map((pack, id) => (
          <button className="bg-slate-600 font-normal font-poppins rounded-lg md:mt-12 p-3 px-6 pt-2 text-white my-4 mx-2 ease-in-out duration-200 hover:bg-green-400">
            {pack.title}{" "}
          </button>
        ))}
      </div>

      {/* cards  */}
      <div className="flex md:flex-row flex-col justify-evenly">
        {details.map((detail, id) => (
          <div
            key={id}
            className={`bg-slate-200 space-x-2 items-center text-black rounded-xl md:mx-12  my-4 w-[300px] flex flex-col p-6 md:h-[320px] md:w-[400px] `}
          >
            <div className="flex flex-row p-2 mx-3 md:p-0 md:mx-0">
              <p className="text-left">{detail.duration} </p>
              <p className="text-right">{detail.cost} </p>
            </div>
            <p className="font-normal font-poppins text-[12px]">
              {detail.content}{" "}
            </p>
            <div className="flex flex-row font-semibold space-x-14 p-2 mx-3 md:p-0 md:mx-0">
              <p className="text-left">{detail.location}</p>
              <p className="text-right">Know more </p>
            </div>
          </div>
        ))}
      </div>

      {/* button  */}
      <button className="bg-green-600 rounded-xl md:mt-12 p-3 px-6 pt-2 text-white mb-10">
        Discover More
      </button>
    </section>
  );
};

export default Packages;
