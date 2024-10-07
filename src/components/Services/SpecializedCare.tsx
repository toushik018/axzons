import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Banner from "../Home/Banner";
import SpecializedCareService from "./SpecializedCareService";
import OurProcess from "../About/OurProcess";
import JointCommissionCertification from "../Home/JointCommissionCertification";

export default function SpecializedCare() {
  return (
    <>
      <div className="relative w-full overflow-hidden bg-[#F3FFF0]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[160px] py-12 sm:py-16 md:py-20">
          <div className="relative z-10 max-w-full lg:max-w-[648px] mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222] mb-6 sm:mb-8 md:mb-10">
              Specialized Care
            </h2>
            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 md:mb-10">
              <p className="text-base sm:text-lg text-[#222222]">
                At Axzons Home Care, we provide tailored care plans for clients
                with unique medical and personal needs, including conditions
                such as Parkinson&apos;s, Alzheimer&apos;s and Dementia,
                Down&apos;s Syndrome, COPD, and heart disease.
              </p>
              <p className="text-base sm:text-lg text-[#222222]">
                Our specialized care ensures that each client receives the
                highest level of personalized attention and support. Our
                specialized care services include:
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mb-6 sm:mb-8 md:mb-10">
              <ul className="text-base sm:text-lg text-[#222222] space-y-2 mb-4 sm:mb-0">
                <li>Respiratory Therapy</li>
                <li>Occupational Therapy</li>
                <li>Audiology</li>
              </ul>
              <div className="hidden sm:block w-px bg-[#222222]"></div>
              <ul className="text-base sm:text-lg text-[#222222] space-y-2">
                <li>Physical Therapy</li>
                <li>Speech Therapy</li>
              </ul>
            </div>
            <p className="text-base sm:text-lg text-[#222222] mb-6 sm:mb-8 md:mb-10">
              We also provide 24/7 live-in care for those needing overnight
              assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-[784px]">
              <Button
                variant="primary"
                className="w-full md:w-[376px] h-[65px] px-4 md:px-8 py-2.5 flex items-center justify-center gap-2 text-xl font-semibold"
              >
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
                (866) 4AXZONS
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 bg-white text-[#7E22CE] border-[#7E22CE] rounded-xl py-3 sm:py-5 px-4 sm:px-8 text-lg sm:text-xl font-semibold w-full sm:w-[376px] h-[50px] sm:h-[65px]"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
                Send a message
              </Button>
            </div>
          </div>
          <div className="lg:absolute lg:top-[-0%] lg:right-0 w-full lg:w-[50%] h-[300px] sm:h-[400px] lg:h-full mt-12 lg:mt-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/services/SpecializedCare.png"
                alt="Specialized Care illustration"
                fill
                className="object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
              />
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <SpecializedCareService />
      <JointCommissionCertification />
      <OurProcess />
    </>
  );
}
