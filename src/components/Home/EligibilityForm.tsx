"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EligibilityForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cityState: "",
    contactTime: "",
    timeZone: "",
    insuranceType: "",
    relationship: "",
    needs: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <section className="bg-[#F3FFF0] py-10 md:py-20 px-4 md:px-10 lg:px-40 flex flex-col lg:flex-row justify-between gap-8 lg:gap-[68px] max-w-[1920px] min-h-[806px]">
      <div className="flex items-center gap-6 md:gap-10 w-full lg:w-[647px]">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight md:leading-[1.2] lg:leading-[61px] text-[#222222]">
            You may be eligible for CDPAP.
          </h2>
          <p className="text-base md:text-lg leading-relaxed md:leading-[23px] text-[#222222]">
            To qualify for Consumer Directed services, patients must have
            Medicaid. Fill out this form to check your eligibility. A member
            from our team will get back at a time convenient to you!
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start p-4 md:p-5 gap-4 w-full lg:w-[832px] bg-[#F3E8FF] rounded-xl"
      >
        <Input
          type="text"
          placeholder="Name *"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
        />
        <Input
          type="tel"
          placeholder="Phone Number *"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
        />
        <Input
          type="email"
          placeholder="Email Address *"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
        />
        <Input
          type="text"
          placeholder="City/State *"
          name="cityState"
          value={formData.cityState}
          onChange={handleChange}
          className="w-full h-[49px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
        />
        <div className="flex flex-col md:flex-row gap-4 md:gap-[10px] w-full">
          <Select onValueChange={handleSelectChange("contactTime")}>
            <SelectTrigger className="w-full md:w-1/2 h-[51px] bg-white text-[#797979] text-base md:text-xl leading-[25px] rounded-md px-4 py-[13px]">
              <SelectValue placeholder="Preferred Contact Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning</SelectItem>
              <SelectItem value="afternoon">Afternoon</SelectItem>
              <SelectItem value="evening">Evening</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={handleSelectChange("timeZone")}>
            <SelectTrigger className="w-full md:w-1/2 h-[51px] bg-white text-[#797979] text-base md:text-xl leading-[25px] rounded-md px-4 py-[13px]">
              <SelectValue placeholder="Time Zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="est">Eastern Time</SelectItem>
              <SelectItem value="cst">Central Time</SelectItem>
              <SelectItem value="mst">Mountain Time</SelectItem>
              <SelectItem value="pst">Pacific Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-[10px] w-full">
          <Select onValueChange={handleSelectChange("insuranceType")}>
            <SelectTrigger className="w-full md:w-1/2 h-[51px] bg-white text-[#797979] text-base md:text-xl leading-[25px] rounded-md px-4 py-[13px]">
              <SelectValue placeholder="Type of Insurance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="medicaid">Medicaid</SelectItem>
              <SelectItem value="medicare">Medicare</SelectItem>
              <SelectItem value="private">Private Insurance</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={handleSelectChange("relationship")}>
            <SelectTrigger className="w-full md:w-1/2 h-[51px] bg-white text-[#797979] text-base md:text-xl leading-[25px] rounded-md px-4 py-[13px]">
              <SelectValue placeholder="Relationship to Client" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="self">Self</SelectItem>
              <SelectItem value="family">Family Member</SelectItem>
              <SelectItem value="caregiver">Caregiver</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Textarea
          placeholder="Describe your home health care needs"
          name="needs"
          value={formData.needs}
          onChange={handleChange}
          className="w-full h-[136px] bg-white text-[#797979] text-base md:text-lg leading-[23px] rounded-md px-4 py-[13px]"
        />
        <Button
          type="submit"
          className="w-full h-[60px] bg-[#7E22CE] text-white text-lg md:text-xl font-semibold leading-[25px] rounded-xl hover:bg-[#6A1FB1]"
        >
          Submit
        </Button>
      </form>
    </section>
  );
}
