import React from "react";
import { notFound } from "next/navigation";
import { locations } from "../page";
import NewYork from "@/components/Locations/NewYork";
import NewJersey from "@/components/Locations/NewJersey";
import Georgia from "@/components/Locations/Georgia";

export async function generateStaticParams() {
  return locations.map((location) => ({
    id: location.slug,
  }));
}

const LocationPage = ({ params }: { params: { id: string } }) => {
  const location = locations.find((s) => s.slug === params.id);

  if (!location) {
    notFound();
  }

  // Render the appropriate component based on the location slug
  const renderLocationComponent = () => {
    switch (location.slug) {
      case "new-york":
        return <NewYork />;
      case "new-jersey":
        return <NewJersey />;
      case "georgia":
        return <Georgia />;

      default:
        // Fallback content if no specific component is <available></available>
        return (
          <div>
            <h1>{location.state}</h1>
            <p>{location.description}</p>
          </div>
        );
    }
  };

  return <div>{renderLocationComponent()}</div>;
};

export default LocationPage;
