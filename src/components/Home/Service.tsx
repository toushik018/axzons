import Image from "next/image";

const services = [
  {
    title: "Homecare Services",
    description:
      "We are deeply committed to providing high-quality home health care services to our clients.",
    icon: "/images/services/homecare1.png",
  },
  {
    title: "Private Duty Nursing",
    description:
      "Our nursing staff is trained to tailor plans based on medical advice and social needs of the client.",
    icon: "/images/services/nursing.png",
  },
  {
    title: "Specialized Care",
    description:
      "Axzons has trained caregivers for clients with conditions including Parkinson's, Down's Syndrome, COPD, etc.",
    icon: "/images/services/specialized.png",
  },
  {
    title: "Nutritional Counseling",
    description:
      "Our nutritional counselors can help in managing diets to counteract ill effects of debilitating diseases.",
    icon: "/images/services/nutrition.png",
  },
  {
    title: "Medical Social Service",
    description:
      "We provide holistic support addressing the social and emotional needs of our clients.",
    icon: "/images/services/socialService.png",
  },
  {
    title: "CDPAP",
    description:
      "Managed by a team of doctors and nurses, Axzons is a CDPAP agency for the entire state of New York.",
    icon: "/images/services/cdpap-icons.png",
  },
];

export default function Service() {
  return (
    <section className="bg-primary-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 w-full">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col h-full"
            >
              <div className="flex flex-col sm:flex-row items-start mb-4">
                <div className="bg-[#F3E8FF] p-3 rounded-lg mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#797979] mb-4">
                    {service.description}
                  </p>
                </div>
              </div>
              <button className="mt-auto self-start sm:self-end px-4 sm:px-5 py-2 sm:py-2.5 border border-primary-600 text-primary-600 rounded-md text-sm sm:text-base font-semibold hover:bg-primary-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
