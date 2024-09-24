import { UserCog, Users, Apple, UserPlus, Activity, HousePlus } from "lucide-react";

const services = [
  {
    icon: HousePlus,
    title: "Homecare Services",
    description:
      "We are deeply committed to providing high-quality home health care services to our clients.",
  },
  {
    icon: UserCog,
    title: "Private Duty Nursing",
    description:
      "Our nursing staff is trained to tailor plans based on medical advice and social needs of the client.",
  },
  {
    icon: Users,
    title: "Specialized Care",
    description:
      "Axzons has trained caregivers for clients with conditions including Parkinson's, Down's Syndrome, COPD, etc.",
  },
  {
    icon: Apple,
    title: "Nutritional Counseling",
    description:
      "Our nutritional counselors can help in managing diets to counteract ill effects of debilitating diseases.",
  },
  {
    icon: UserPlus,
    title: "Medical Social Service",
    description:
      "We provide holistic support addressing the social and emotional needs of our clients.",
  },
  {
    icon: Activity,
    title: "CDPAP",
    description:
      "Managed by a team of doctors and nurses, Axzons is a CDPAP agency for the entire state of New York.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-primary-50 py-20 px-40 w-full min-w-[1398px] h-[584px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col"
            >
              <div className="flex items-start mb-4">
                <div className="bg-[#F3E8FF] p-3 rounded-lg mr-4">
                  <service.icon className="w-8 h-8 text-primary-800" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#797979] mb-4">{service.description}</p>
                </div>
              </div>
              <button className="mt-auto self-end px-5 py-2.5 border border-primary-600 text-primary-600 rounded-md font-semibold hover:bg-primary-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
