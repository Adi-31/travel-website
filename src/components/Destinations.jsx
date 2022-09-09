import React from "react";
import { world_map_2 } from "../assets";
import { destinations } from "../constants";

const Destinations = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${world_map_2})`,
          backgroundSize: "cover",
          // backgroundPositionX: "-50px",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-slate-50 flex flex-col items-center w-full md:p-6 p-3 text-black"
      >
        {/* Title  */}
        <h2 className="text-black text-center font-poppins font-semibold mt-5 text-[30px] md:text-[45px]">
          Our popular destinations
        </h2>
        {/* <h2 className="text-black text-center font-poppins font-semibold mt-5 text-[30px] md:text-[45px]">
          Our popular destinations
        </h2> */}
        {/* <div className="sm:hidden flex flex-1 justify-start items-center">
          <img src={world_map_2} alt="" />
        </div> */}
        {/* cards  */}
        <div className="text-black flex flex-col md:flex-row md:m-10">
          {destinations.map((destination, id) => (
            <div
              key={id}
              className={`bg-slate-100 space-x-2 items-center rounded-xl md:mx-10 md:flex-row my-4 w-[300px] flex flex-row p-6 md:h-[180px] ${
                id !== destinations.length - 1 ? "mb-4" : "mb-12"
              }`}
            >
              <h2 className="font-semibold p-3 font-poppins text-[18px]">
                {destination.country}
              </h2>
              <p className="font-light p-3 font-poppins">
                {destination.content}{" "}
              </p>
              <p className="font-semibold pr-2 ">{">"}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Destinations;
