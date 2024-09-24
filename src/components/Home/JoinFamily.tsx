"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Search, MapPin } from "lucide-react";

export default function JoinFamily() {
  const [activeTab, setActiveTab] = useState("request");

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20 max-w-[1920px]">
      <div className="max-w-7xl mx-auto">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center justify-center gap-2 w-full sm:w-[200px] h-[50px] bg-primary-600 hover:bg-primary-700 rounded-md text-white text-lg font-semibold">
                <Phone className="w-5 h-5" />
                (866) 4AXZONS
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 w-full sm:w-[200px] h-[50px] border-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-md text-primary-600 text-lg font-semibold"
              >
                <Mail className="w-5 h-5" />
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Postal Code or City or State"
                className="w-full sm:w-[60%] h-[50px] border-[#797979] rounded-md text-lg"
              />
              <Button className="flex items-center justify-center gap-2 w-full sm:w-[40%] h-[50px] bg-primary-600 hover:bg-primary-700 rounded-md text-white text-lg font-semibold">
                <Search className="w-5 h-5" />
                Find a local office
              </Button>
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
