import Banner from "@/components/Home/Banner";
import EligibilityForm from "@/components/Home/EligibilityForm";
import Hero from "@/components/Home/Hero";
import JoinFamily from "@/components/Home/JoinFamily";
import Service from "@/components/Home/Service";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Service />
      <EligibilityForm />
      <JoinFamily />
    </>
  );
};

export default Home;
