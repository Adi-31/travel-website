import React from "react";
import { steps } from "../constants";

const Booking = () => {
  return (
    <section className="bg-white flex flex-col items-center w-full md:p-6 p-3">
      {/* title  */}
      <h2 className="text-black text-center font-poppins font-semibold mt-5 mx-4 text-[30px] md:text-[45px] p-3">
        Book Your Next Trip in 3 Easy Steps
      </h2>
      {/* text  */}
      <p className="text-black text-center font-poppins font-light text-[16px] md:text-[45px]">
        Easy and Fast
      </p>
      <section className="flex flex-col-reverse">
        {/* cards  */}
        <div className="flex flex-col md:flex-row md:justify-evenly">
          {steps.map((step, id) => (
            <div
              key={id}
              className={`bg-cyan-100 space-x-2 items-center md:w-[400px] text-black rounded-xl md:mx-10 md:flex-row my-4 w-[300px] flex flex-col p-6 md:h-[180px] ${
                id !== steps.length - 1 ? "mb-4" : "mb-12"
              }`}
            >
              <h3 className="font-semibold p-3 font-poppins text-[18px] text-center">
                {step.title}{" "}
              </h3>
              <p className="font-light p-3 font-poppins">{step.content} </p>
            </div>
          ))}
        </div>
        {/* add an image here  */}
      </section>
    </section>
  );
};

export default Booking;
