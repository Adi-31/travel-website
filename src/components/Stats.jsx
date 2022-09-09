import { world_map_1 } from "../assets";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      style={{ backgroundImage: `url(${world_map_1})` }}
      className="bg-slate-100 flex flex-col items-center w-full md:p-6 p-3"
    >
      {/* main title  */}
      <h2 className="text-black font-poppins font-semibold mt-5 mx-8 text-[32px] md:text-[45px] text-center">
        We always try to give you the best service
      </h2>
      {/* paragraph  */}
      <p className="text-black font-poppins font-normal text-[16px] md:text-[45px] text-center p-4 mx-4">
        We always try to make our customer happy. We provide all kinds of
        facilities. Your satisfaction is our main priority.
      </p>
      {/* cards  */}
      <div className="w-full flex flex-col md:flex-row md:justify-evenly">
        {stats.map((stat, id) => (
          <div
            key={id}
            className="text-black flex flex-col md:mx-12 items-center bg-white space-y-2 rounded-xl my-4 p-6 md:h-[180px] mx-6"
          >
            <h1 className="font-semibold font-poppins text-[20px]">
              {stat.value}{" "}
            </h1>
            <p className="text-center">{stat.title} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
