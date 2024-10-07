import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import JoinFamily from "@/components/Home/JoinFamily";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Axzons Homecare',
  description: 'Explore the comprehensive home health care services offered by Axzons Homecare, including skilled nursing, personal care, and specialized support.',
  openGraph: {
    title: 'Our Services | Axzons Homecare',
    description: 'Explore the comprehensive home health care services offered by Axzons Homecare, including skilled nursing, personal care, and specialized support.',
    images: [
      {
        url: 'https://axzons.com/services-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Axzons Homecare Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Axzons Homecare',
    description: 'Explore the comprehensive home health care services offered by Axzons Homecare, including skilled nursing, personal care, and specialized support.',
    images: ['https://axzons.com/services-twitter-image.jpg'],
  },
};

export const serviceData = [
  {
    title: "Homecare Services",
    description:
      "We are deeply committed to providing high-quality home health care services to our clients.",
    image: "/images/services/homecare-service.png",
    bgColor: "bg-primary-100",
    textColor: "text-black",
    imagePosition: "right",
    slug: "homecare-services",
  },
  {
    title: "Private Duty Nursing",
    description:
      "Our nursing staff is trained to tailor plans based on medical advice and social needs of the client.",
    image: "/images/services/private-duty.png",
    bgColor: "bg-primary-800",
    textColor: "text-white",
    imagePosition: "left",
    slug: "private-duty-nursing",
  },
  {
    title: "Specialized Care",
    description:
      "Axzons has trained caregivers for clients with conditions including Parkinson's, Down's Syndrome, COPD, etc.",
    image: "/images/services/specialized-care.png",
    bgColor: "bg-primary-100",
    textColor: "text-black",
    imagePosition: "right",
    slug: "specialized-care",
  },
  {
    title: "Nutritional Counseling",
    description:
      "Our nutritional counselors can help in managing diets to counteract ill effects of debilitating diseases.",
    image: "/images/services/nutritional-counseling.png",
    bgColor: "bg-primary-800",
    textColor: "text-white",
    imagePosition: "left",
    slug: "nutritional-counseling",
  },
  {
    title: "Medical Social Service",
    description:
      "We provide holistic support addressing the social and emotional needs of our clients.",
    image: "/images/services/medical-social-service.png",
    bgColor: "bg-primary-100",
    textColor: "text-black",
    imagePosition: "right",
    slug: "medical-social-service",
  },
  {
    title: "Consumer Directed (CDPAP)",
    description:
      "Managed by a team of doctors and nurses, Axzons is a CDPAP agency for the entire state of New York.",
    image: "/images/services/cdpap.png",
    bgColor: "bg-primary-800",
    textColor: "text-white",
    imagePosition: "left",
    slug: "cdpap",
  },
];

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    image: string;
    bgColor: string;
    textColor: string;
    imagePosition: "left" | "right";
    slug: string;
  };
}
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <div className="flex flex-col md:flex-row w-full overflow-hidden rounded-2xl">
    {/* Image - always on top for mobile, follows imagePosition for larger screens */}
    <div className="w-full md:w-1/2 md:order-none">
      <Image
        src={service.image}
        alt={service.title}
        width={800}
        height={489}
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Content - always below image for mobile, follows imagePosition for larger screens */}
    <div
      className={`w-full md:w-1/2 ${service.bgColor} p-8 md:p-12 flex flex-col justify-center items-center text-center
        ${service.imagePosition === 'left' ? 'md:order-last' : 'md:order-first'}`}
    >
      <h2 className={`text-2xl md:text-4xl font-bold mb-4 md:mb-6 ${service.textColor}`}>
        {service.title}
      </h2>
      <p className={`text-base md:text-xl mb-6 ${service.textColor}`}>
        {service.description}
      </p>
      <Link href={`/services/${service.slug}`}>
        <Button
          variant="outline"
          className="flex flex-row items-center justify-center px-5 py-2.5 w-full md:w-36 h-12 bg-white text-primary-600 border border-[#7E22CE] rounded-md hover:bg-primary-100 font-semibold text-base"
        >
          Learn More
        </Button>
      </Link>
    </div>
  </div>
);



const Services = () => {
  return (
    <>
      <div className="bg-green-50 py-16 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1600px] mx-auto space-y-8 md:space-y-12">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              service={{
                ...service,
                imagePosition: service.imagePosition as "left" | "right",
              }}
            />
          ))}
        </div>
      </div>
      <JoinFamily />
    </>
  );
};

export default Services;

