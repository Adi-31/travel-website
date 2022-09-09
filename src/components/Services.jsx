import { GrTicket } from "react-icons/gr";
import { services } from "../constants";

const Services = () => {
  return (
    // changed the margin here to center align the contents for some reason
    <section className="bg-white flex flex-col items-center w-full md:p-6 p-3">
      {/* Title  */}
      <h2 className="text-black font-poppins font-semibold mt-5 text-[30px] md:text-[45px]">
        Our Services
      </h2>
      {/* Cards  */}
      {/* <GrTicket /> */}
      <div className="text-black flex flex-col md:flex-row md:m-10">
        {services.map((service, id) => (
          <div
            key={id}
            className={`bg-slate-100 space-y-2 rounded-xl m-4 p-6 md:h-[180px] ${
              id !== services.length - 1 ? "mb-4" : "mb-12"
            }`}
          >
            <h2 className="font-semibold font-poppins text-[20px]">
              {service.title}
            </h2>
            <p>{service.content} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
