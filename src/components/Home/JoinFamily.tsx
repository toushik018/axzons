"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Search, MapPin } from "lucide-react";

export default function JoinFamily() {
  const [activeTab, setActiveTab] = useState("request");

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20 max-w-[1920px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#222222]">
              Join the Axzons family!
            </h2>
            <p className="text-lg text-[#222222] max-w-[600px]">
              Axzons enables the delivery of comfortable homecare services at
              patients&apos; homes. We provide CDPAP services in all counties in
              the state of New York, and homecare services in New York, New
              Jersey and Georgia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full md:w-[376px] h-[65px] px-4 md:px-8 py-2.5 flex items-center justify-center gap-2 text-xl font-semibold"
              >
                <Phone className="h-5 w-5 md:h-6 md:w-6" />
                (866) 4AXZONS
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 w-full sm:w-[376px] h-[65px] border-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-md text-primary-600 text-lg font-semibold"
              >
                <Mail className="w-6 h-6" />
                Send a message
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("request")}
                className={`px-4 py-2 text-lg font-semibold ${
                  activeTab === "request"
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-[#797979]"
                }`}
              >
                Request Care
              </button>
              <button
                onClick={() => setActiveTab("join")}
                className={`px-4 py-2 text-lg font-semibold ${
                  activeTab === "join"
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-[#797979]"
                }`}
              >
                Join Our Team
              </button>
            </div>
            <div className="w-full max-w-[784px]">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="w-full sm:w-1/2">
                  <Input
                    placeholder="Postal Code or City or State"
                    className="w-full h-[65px] border-[#797979] rounded-md text-lg px-4"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <Button
                    variant="primary"
                    className="w-full h-[65px] rounded-md text-white text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Search className="w-6 h-6" />
                    Find a local office
                  </Button>
                </div>
              </div>
            </div>
            <Button
              variant="link"
              className="flex items-center justify-start gap-2 text-primary-600 text-lg font-semibold p-0"
            >
              <MapPin className="w-5 h-5" />
              Use Current Location
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
