import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Banner from "../Home/Banner";
import JointCommissionCertification from "../Home/JointCommissionCertification";
import OurProcess from "../About/OurProcess";

export default function NutritionalCounseling() {
  return (
    <>
      <div className="relative w-full overflow-hidden bg-[#F3FFF0]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[160px] py-12 sm:py-16 md:py-20">
          <div className="relative z-10 max-w-full lg:max-w-[648px] mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#222222] mb-6 sm:mb-8 md:mb-10">
              Nutritional Counseling
            </h2>
            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 md:mb-10">
              <p className="text-base sm:text-lg text-[#222222]">
                Unintentional weight loss can weaken the immune system, lead to
                infections, cause skin breakdown, and result in muscle loss,
                increasing the risk of falls and injury.
              </p>
              <p className="text-base sm:text-lg text-[#222222]">
                Our expert nutritional counselors offer personalized guidance to
                promote healthy eating habits and overall well-being. We help
                manage diets to counteract the effects of debilitating diseases,
                ensuring our clients maintain optimal health.
              </p>
              <p className="text-base sm:text-lg text-[#222222]">
                We support our caregivers with ongoing nutrition training,
                including:
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mb-6 sm:mb-8 md:mb-10">
              <ul className="text-base sm:text-lg text-[#222222] space-y-2 mb-4 sm:mb-0">
                <li>Preparing grocery lists</li>
                <li>Meal preparation</li>
                <li>Cleanup/storage of prepared foods</li>
              </ul>
              <div className="hidden sm:block w-px bg-[#222222]"></div>
              <ul className="text-base sm:text-lg text-[#222222] space-y-2">
                <li>Meals on Wheels coordination</li>
                <li>Monitoring diet and eating</li>
                <li>Disease-specific assistance</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-[784px]">
              <Button className="flex items-center justify-center gap-2 bg-[#7E22CE] text-white rounded-xl py-3 sm:py-5 px-4 sm:px-8 text-lg sm:text-xl font-semibold w-full sm:w-[376px] h-[50px] sm:h-[65px]">
                <Phone size={20} className="sm:w-6 sm:h-6" />
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
          <div className="lg:absolute lg:top-[-8%] lg:right-0 w-full lg:w-[50%] h-[300px] sm:h-[400px] lg:h-full mt-12 lg:mt-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/services/NutritionalCounseling.png"
                alt="Nutritional Counseling illustration"
                fill
                className="object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
              />
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <JointCommissionCertification />
      <OurProcess />
    </>
  );
}
