import React from "react";
import Image from "next/image";
import { Heart, Clock, Stethoscope } from "lucide-react";

interface BannerItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BannerItem: React.FC<BannerItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-row items-center gap-4 w-[340px]">
    <div className="w-[84px] h-[84px] flex items-center justify-center bg-[#F3E8FF] rounded-full">
      {icon}
    </div>
    <div className="flex flex-col justify-center gap-2 w-[240px]">
      <h3 className="font-bold text-lg text-white font-['Be_Vietnam_Pro']">
        {title}
      </h3>
      <p className="font-normal text-lg leading-[23px] text-white font-['Be_Vietnam_Pro']">
        {description}
      </p>
    </div>
  </div>
);

const Banner = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between items-center content-start p-10 md:px-20 lg:px-40 gap-[69.5px] w-full min-w-[1398px] h-[164px] bg-[#4E2E87]">
      <BannerItem
        icon={<Heart size={48} color="#4E2E87" />}
        title="Care"
        description="The care you need at the home you love."
      />
      <BannerItem
        icon={<Clock size={48} color="#4E2E87" />}
        title="Assistance"
        description="Homecare assistance available 24/7."
      />
      <BannerItem
        icon={
          <div className="relative w-[84px] h-[84px]">
            <Image
              src="/images/quality.png"
              alt="Quality"
              layout="fill"
              objectFit="contain"
            />
          </div>
        }
        title="Quality"
        description="Accredited by authorized state agencies."
      />
      <BannerItem
        icon={<Stethoscope size={48} color="#4E2E87" />}
        title="Management"
        description="Managed by trained doctors and nurses."
      />
    </div>
  );
};

export default Banner;
