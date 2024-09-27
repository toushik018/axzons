import React from "react";
import { notFound } from "next/navigation";
import { serviceData } from "../page";

// Import all service components
import HomecareServices from "@/components/Services/Homecare";
import PrivateDutyNursing from "@/components/Services/PrivateDutyNursing";
import SpecializedCare from "@/components/Services/SpecializedCare";
import NutritionalCounseling from "@/components/Services/NutritionalCounseling";
import MedicalSocialService from "@/components/Services/MedicalSocialService";
// Import other service components as needed
// import PrivateDutyNursing from '@/components/Services/PrivateDutyNursing';
// import SpecializedCare from '@/components/Services/SpecializedCare';
// ... and so on for other services

export async function generateStaticParams() {
  return serviceData.map((service) => ({
    id: service.slug,
  }));
}

const ServicePage = ({ params }: { params: { id: string } }) => {
  const service = serviceData.find((s) => s.slug === params.id);

  if (!service) {
    notFound();
  }

  // Render the appropriate component based on the service slug
  const renderServiceComponent = () => {
    switch (service.slug) {
      case "homecare-services":
        return <HomecareServices />;
      // Add cases for other services as you create their components
      case "private-duty-nursing":
        return <PrivateDutyNursing />;
      case "specialized-care":
        return <SpecializedCare />;
      case "nutritional-counseling":
        return <NutritionalCounseling />;
      case "medical-social-service":
        return <MedicalSocialService />;
      // ... and so on for other services
      default:
        // Fallback content if no specific component is available
        return (
          <div>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        );
    }
  };

  return <div>{renderServiceComponent()}</div>;
};

export default ServicePage;
