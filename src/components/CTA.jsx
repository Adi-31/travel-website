import React from "react";

const CTA = () => {
  return (
    <section className="bg-white flex flex-col items-center w-full md:p-6 justify-center">
      {/* cta card  */}
      <div className="bg-cyan-200 rounded-xl rounded-tl-[80px] m-10 p-2">
        {/* text  */}
        <h2 className="text-black text-center p-4 font-poppins font-semibold mt-5 text-[28px] md:text-[45px]">
          Subscribe to get information, latest news and other interesting offers
          !
        </h2>
        <div className="flex flex-row space-x-2">
          <input
            type="text"
            placeholder="Your email"
            className="rounded-xl h-[45px] p-3 px-6 pt-2"
          />
          <button className="bg-green-600 rounded-xl md:mt-12 p-3 px-6 pt-2 text-white mb-10">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
