import Image from 'next/image';

export default function JointCommissionCertification() {
  return (
    <section className="relative w-full max-w-[1920px] min-h-[533px] bg-gradient-to-r from-[rgba(170,134,196,0.7)] via-[rgba(255,255,255,0.7)] to-[rgba(231,153,166,0.7)] flex justify-between items-center p-[80px 160px] gap-[132px]">
      <div className="flex flex-col items-start gap-10 w-full max-w-[753px]">
        <div className="flex flex-col items-start gap-[10px]">
          <h2 className="text-[48px] font-bold leading-[61px] text-[#222222]">
            Homecare Excellence Certified
          </h2>
          <h3 className="text-[36px] font-bold leading-[46px] text-[#7E22CE]">
            by The Joint Commission
          </h3>
        </div>
        <p className="text-[18px] font-normal leading-[23px] text-[#222222]">
          Axzons is a licensed home care services agency that has earned The Gold
          Seal of Approval® from The Joint Commission®.
        </p>
      </div>
      <div className="relative w-full max-w-[373px] h-[373px]">
        <Image
          src="/images/image-31.png"
          alt="Joint Commission Certification"
          layout="fill" // This will cover the div completely
          objectFit="contain" // This maintains aspect ratio but fills the tag
        />
      </div>
    </section>
  );
}
