import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <section className="bg-white text-black flex flex-col">
      {/* group div  */}
      <div className="flex flex-row justify-between mx-auto pb-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.id} className="p-3">
            <h3 className="font-semibold text-[16x] mb-2 text-left">
              {footerLink.title}{" "}
            </h3>
            {footerLink.list.map((item, id) => (
              <p className="font-normal mb-1 text-left p-1">{item} </p>
            ))}
          </div>
        ))}
      </div>
      {/* social media section  */}
    </section>
  );
};

export default Footer;
