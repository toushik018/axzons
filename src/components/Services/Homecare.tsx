import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Banner from "../Home/Banner";
import HomeCareService8 from "./HomeCareService8";
import JointCommissionCertification from "../Home/JointCommissionCertification";
import OurProcess from "../About/OurProcess";
import FAQSection from "./FAQSection";

export default function HomecareServices() {
  return (
    <>
      <div className="relative w-full bg-[#F3FFF0] overflow-hidden">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/2 max-w-2xl z-10 py-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#222222] mb-10">
              Homecare Services
            </h2>
            <div className="space-y-5 mb-10">
              <p className="text-lg text-[#222222]">
                Axzons Home Care Agency is dedicated to providing exceptional
                home health care services across New York, New Jersey, and
                Georgia. Our comprehensive range of services ensures that each
                client receives personalized care tailored to their unique
                needs.
              </p>
              <p className="text-lg text-[#222222]">
                Our homecare services include:
              </p>
            </div>
            <div className="flex justify-between mb-10">
              <ul className="text-lg text-[#222222] space-y-2">
                <li>Live-in Care</li>
                <li>Companion Care</li>
                <li>Respite Care</li>
                <li>Personal Care</li>
              </ul>
              <div className="w-px bg-[#222222]"></div>
              <ul className="text-lg text-[#222222] space-y-2">
                <li>Home Health Aide</li>
                <li>Homemaking Services</li>
                <li>Housekeeping Services</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex justify-center items-center py-2.5 px-6 sm:px-8 gap-2 w-full sm:w-[376px] h-[65px] bg-primary-600 hover:bg-primary-700 rounded-xl">
                <Phone size={24} className="text-white" />
                <span className="font-semibold text-xl text-white whitespace-nowrap">
                  (866) 4AXZONS
                </span>
              </Button>
              <Button
                variant="outline"
                className="flex justify-center items-center py-2.5 px-6 sm:px-8 gap-2 w-full sm:w-[376px] h-[65px] bg-white border-[#7E22CE] border rounded-xl"
              >
                <Mail size={24} className="text-[#7E22CE]" />
                <span className="font-semibold text-xl text-[#7E22CE] whitespace-nowrap">
                  Send a message
                </span>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
            <div className="relative w-full h-[400px] lg:h-full">
              <Image
                src="/images/services/Service-blob.png"
                alt="Homecare illustration"
                fill
                className="object-cover object-left-top"
              />
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <HomeCareService8 />
      <JointCommissionCertification />
      <OurProcess />
      <FAQSection />
    </>
  );
}
