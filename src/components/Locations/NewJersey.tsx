import React from "react";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import OfficeLocationNJ from "./OfficeLocationNJ";
import Banner from "../Home/Banner";
import Service from "../Home/Service";
import JointCommissionCertification from "../Home/JointCommissionCertification";
import Descriptors from "../About/Descriptors";
import EligibilityForm2 from "./EligibilityForm2";
import Testimonial from "./Testimonial";

const NewJersey = () => {
  return (
    <>
      <div className="relative w-full max-w-[1920px] min-h-[501px] flex flex-col items-start p-20 gap-10 isolate overflow-hidden bg-[#F3FFF0]">
        <h2 className="w-[648px] text-[48px] font-bold leading-[61px] text-[#222222]">
          New Jersey
        </h2>

        <div className="flex flex-col items-start gap-5 w-[648px]">
          <p className="text-lg leading-[23px] text-[#222222]">
            Axzons is a New Jersey licensed homecare agency. We provide homecare
            services in all the counties of New Jersey.
          </p>
        </div>

        <div className="flex gap-8">
          <button className="flex justify-center items-center px-6 py-5 gap-2 w-[376px] h-[65px] bg-[#7E22CE] rounded-xl">
            <Phone className="text-white" size={24} />
            <span className="font-semibold text-xl text-white">
              (866) 4AXZONS
            </span>
          </button>

          <button className="flex justify-center items-center px-6 py-5 gap-2 w-[376px] h-[65px] bg-white border border-[#7E22CE] rounded-xl">
            <Mail className="text-[#7E22CE]" size={24} />
            <span className="font-semibold text-xl text-[#7E22CE]">
              Send a message
            </span>
          </button>
        </div>

        <div className="w-full lg:w-1/2 lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
          <div className="relative w-full h-[400px] lg:h-full">
            <Image
              src="/images/locations/NewJersey-Blob.png"
              alt="Background Blob"
              fill
              className="object-cover object-left-top"
            />
          </div>
        </div>
      </div>
      <Banner />
      <OfficeLocationNJ />
      <Service />
      <JointCommissionCertification />
      <Descriptors />
      <EligibilityForm2 />
      <Testimonial />
    </>
  );
};

export default NewJersey;
