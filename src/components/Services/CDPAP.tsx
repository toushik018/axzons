import React from "react";
import Image from "next/image";
import Banner from "../Home/Banner";
import EligibilityForm from "../Home/EligibilityForm";
import HowItWorksFAQ from "./HowItWorksFAQ";
import CDPAPEligibility from "./CDPAPEligibility";

const CDPAP = () => {
  return (
    <>
      <section className="w-full max-w-[1920px] bg-[#F3FFF0] relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[160px] gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative z-10">
          <h2 className="w-full lg:w-[70%] xl:w-[648px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold leading-tight sm:leading-[1.2] md:leading-[1.3] lg:leading-[61px] text-black">
            Consumer Directed (CDPAP)
          </h2>
          <div className="w-full lg:w-[70%] xl:w-[648px]">
            <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-normal leading-relaxed sm:leading-[23px] text-black">
              Axzons is a Local CDPAP agency, accredited by the New York State
              Department of Health. Managed by doctors and nurses, we expertly
              navigate the CDPAP program, helping Medicaid-eligible New York
              residents hire, train, and supervise personal assistants.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 w-full max-w-[784px]">
            <a
              href="tel:+18664AXZONS"
              className="w-full sm:w-[48%] md:w-[376px] h-[50px] sm:h-[60px] md:h-[65px] px-4 sm:px-6 py-2 sm:py-2.5 bg-[#7E22CE] hover:bg-[#6B1FAF] text-white font-semibold text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              (866) 4AXZONS
            </a>
            <a
              href="#"
              className="w-full sm:w-[48%] md:w-[376px] h-[50px] sm:h-[60px] md:h-[65px] px-4 sm:px-6 py-2 sm:py-2.5 bg-white hover:bg-[#F3E8FF] text-[#7E22CE] font-semibold text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 rounded-xl border border-[#7E22CE]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send a message
            </a>
          </div>
        </div>
        <div className="md:absolute w-full md:w-[480px] lg:w-[580px] xl:w-[680px] 2xl:w-[780px] h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] md:right-[0%] lg:right-0 xl:right-[0%] 2xl:right-[0%] md:top-[-15%]">
          <div className="relative w-full h-full">
            <Image
              src="/images/services/cdpap.png"
              alt="CDPAP Service Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
            />
          </div>
        </div>
      </section>
      <Banner />
      <EligibilityForm />
      <HowItWorksFAQ />
      <CDPAPEligibility />
    </>
  );
};

export default CDPAP;
