import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-40 py-50 flex items-center justify-between">
      <div className="w-[1005px] flex flex-col gap-10">
        <h1 className="text-[64px] font-bold leading-[80.96px] text-left">
          The care you need
          <br />
          at the home you love
        </h1>
        <p className="text-lg font-normal leading-[22.77px] text-left text-gray-700 max-w-[600px]">
          Axzons homecare has been a leading provider of homecare and CDPAP
          services in New York, New Jersey, and now in Georgia.
        </p>
        <Button
          size="lg"
          className="w-[376px] h-[65px] px-6 py-2.5 rounded-tl-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 inline-block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          (866) 4AXZONS
        </Button>
      </div>
      <div className="relative w-[753px] h-[753px]">
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
