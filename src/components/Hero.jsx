import { view } from "../assets";
// import Navbar from "./Navbar";

const Hero = () => {
  // const style = { background-image: {}}
  // return (
  //   <div className="flex flex-col">
  //     {/* <img src={view} className="absolute" /> */}
  //     <div className="absolute w-full flex justify-center mt-36 text-center">
  //       <h1 className="text-[30px] font-semibold font-poppins">
  //         Your Imagination Is <br />
  //         Your Only Limit
  //       </h1>
  //     </div>

  //     <div
  //       className={`absolute z-[100] top-[190px] w-full h-[150px] bg-gradient-to-t from-slate-200 to-transparent opacity-50`}
  //     >
  //       {/* <img src={view} className="static object-cover" /> */}
  //       {/* div is here */}
  //     </div>
  //   </div>
  // );

  return (
    <section className="lg:mt-20 mb-14">
      <div className="flex flex-col items-center px-6 mx-auto md:space-y-0 lg:mb-72 ">
        {/* Main Title  */}
        <h1 className="font-poppins text-center p-3 md:mb-6 text-[45px] md:text-[70px] md:mt-20 font-semibold">
          Your Imagination is <br />
          Your Only Limit
        </h1>
        {/* paragraph  */}
        <p className="text-[14px] font-normal font-poppins p-2 text-center mb-4 md:mb-10">
          We always try to make our customer Happy. We provide all kind of
          facilities. <br /> Your satisfaction is our main priority
        </p>
        {/* Button  */}
        <button className="bg-green-600 rounded-2xl md:mt-12 p-3 px-6 pt-2 text-white ">
          Dicover more
        </button>
      </div>
    </section>
  );
};

export default Hero;
