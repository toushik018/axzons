import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full max-w-[1920px] bg-[#F3FFF0] relative overflow-hidden px-2">
      <div className="w-full flex flex-col items-start p-6 sm:p-8 md:p-16 lg:p-[100px_80px] xl:p-[200px_160px] gap-4 sm:gap-6 md:gap-8 lg:gap-10 relative z-10">
        <div className="w-full lg:w-[672px] mb-4 sm:mb-0 space-y-8">
          <h1 className="w-full md:w-[80%] lg:w-[672px] text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight md:leading-[1.2] lg:leading-[81px] text-[#222222]">
            The care you need
            <br />
            at the home you love
          </h1>
          <p className="w-full md:w-[80%] lg:w-[648px] text-base md:text-lg font-normal leading-relaxed md:leading-[23px] text-[#222222]">
            Axzons homecare has been a leading provider of homecare and CDPAP
            services in New York, New Jersey, and now in Georgia.
          </p>
          <Button
            variant="primary"
            className="w-full md:w-[376px] h-[65px] px-4 md:px-8 py-2.5 flex items-center justify-center gap-2 text-xl font-semibold"
          >
            <Phone className="h-5 w-5 md:h-6 md:w-6" />
            (866) 4AXZONS
          </Button>
        </div>
      </div>
      <div className="w-full aspect-square sm:h-[400px] md:h-[500px] lg:h-[780px] relative mt-4 sm:mt-0 sm:absolute sm:right-0 sm:bottom-0 sm:w-[60%] lg:w-[750px]">
        <Image
          src="/images/heroImage-mobile.png"
          alt="Healthcare worker assisting elderly patient"
          layout="fill"
          objectFit="contain"
          className="sm:hidden"
        />
        <Image
          src="/images/Blob.png"
          alt="Healthcare worker assisting elderly patient"
          layout="fill"
          objectFit="contain"
          className="rounded-[30%_70%_70%_30%/30%_30%_70%_70%] hidden sm:block"
        />
      </div>
    </section>
  );
}
