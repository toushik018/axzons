import React from "react";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import AllJobs from "@/components/JoinOurTeam/AllJobs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team | Career Opportunities at Axzons Homecare",
  description:
    "Explore exciting career opportunities with Axzons Homecare. Join our team of dedicated professionals in providing exceptional home health care services.",
  openGraph: {
    title: "Join Our Team | Career Opportunities at Axzons Homecare",
    description:
      "Explore exciting career opportunities with Axzons Homecare. Join our team of dedicated professionals in providing exceptional home health care services.",
    images: [
      {
        url: "https://axzons.com/join-team-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Join Axzons Homecare Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Our Team | Career Opportunities at Axzons Homecare",
    description:
      "Explore exciting career opportunities with Axzons Homecare. Join our team of dedicated professionals in providing exceptional home health care services.",
    images: ["https://axzons.com/join-team-twitter-image.jpg"],
  },
};

const JoinOurTeam = () => {
  return (
    <>
      <div className="relative w-full max-w-[1920px] min-h-[501px] flex flex-col items-start p-20 gap-10 isolate overflow-hidden bg-[#F3FFF0]">
        <div className="w-full lg:w-1/2">
          <h2 className="w-[648px] text-[48px] font-bold leading-[61px] text-[#222222]">
            Be a part of our story.
            <br />
            We`&apos;re hiring
          </h2>

          <div className="flex flex-col items-start gap-5 w-[648px]">
            <p className="text-lg leading-[23px] text-[#222222]">
              We`&apos;re looking for passionate people to join us on our
              mission. Together, we can deliver homecare to the communities
              where we live, love, and belong.
            </p>
          </div>

          <div className="flex gap-8">
            <button className="flex justify-center items-center px-6 py-5 gap-2 w-[376px] h-[65px] bg-[#7E22CE] rounded-xl transition-all duration-300 hover:bg-primary-50 hover:border hover:border-primary-600 group">
              <Phone
                className="text-white group-hover:text-primary-600"
                size={24}
              />
              <span className="font-semibold text-xl text-white group-hover:text-primary-600">
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
        </div>

        <div className="w-full lg:w-1/2 lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
          <div className="relative w-full h-[400px] lg:h-full">
            <Image
              src="/images/locations/joinTeam.png"
              alt="Join Axzons Homecare Team"
              fill
              className="object-cover object-left-top"
            />
          </div>
        </div>
      </div>

      <AllJobs />
    </>
  );
};

export default JoinOurTeam;
