import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full max-w-[1920px] h-auto min-h-[753px] bg-[#F3FFF0] flex flex-col items-start p-0 relative overflow-hidden">
      <div className="w-full h-full flex flex-col items-start p-8 md:p-16 lg:p-[100px_80px] xl:p-[200px_160px] gap-6 md:gap-8 lg:gap-10 isolate relative z-10">
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
          size="lg"
          className="w-full md:w-[376px] h-[65px] px-4 md:px-8 py-2.5 rounded-xl bg-[#7E22CE] hover:bg-[#6B1FAF] text-white font-semibold text-lg md:text-xl flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6"
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
        </Button>
      </div>
      <div className="absolute w-[80%] md:w-[90%] lg:w-[750px] h-[60%] md:h-[70%] lg:h-[780px] right-[-10%] md:right-[-15%] lg:right-[-80px] top-[20%] md:top-[10%] lg:top-[-10px]">
        <Image
          src="/images/Blob.png"
          alt="Healthcare worker assisting elderly patient"
          layout="fill"
          objectFit="cover"
          className="rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
        />
      </div>
    </section>
  );
}
