"use client";

import React, { useState, useEffect } from "react";
import { jobs, Job } from "@/constants/jobs";
import { Search, MapPin, Briefcase, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

interface Filters {
  datePosted: string;
  remote: string;
  jobType: string;
  experienceLevel: string;
  salary: string;
}

const AllJobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [filters, setFilters] = useState<Filters>({
    datePosted: "",
    remote: "",
    jobType: "",
    experienceLevel: "",
    salary: "",
  });
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState =
        selectedState === "" || job.location.includes(selectedState);
      const matchesRemote =
        filters.remote === "" || job.type === filters.remote;
      const matchesJobType =
        filters.jobType === "" || job.schedule === filters.jobType;
      const matchesExperienceLevel =
        filters.experienceLevel === "" ||
        job.experienceLevel === filters.experienceLevel;
      const matchesSalary =
        filters.salary === "" || matchesSalaryRange(job.salary, filters.salary);
      const matchesDatePosted =
        filters.datePosted === "" ||
        isWithinDateRange(job.datePosted, filters.datePosted);

      return (
        matchesSearch &&
        matchesState &&
        matchesRemote &&
        matchesJobType &&
        matchesExperienceLevel &&
        matchesSalary &&
        matchesDatePosted
      );
    });

    setFilteredJobs(filtered);
  }, [searchTerm, selectedState, filters]);

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedState("");
    setFilters({
      datePosted: "",
      remote: "",
      jobType: "",
      experienceLevel: "",
      salary: "",
    });
  };

  const matchesSalaryRange = (
    jobSalary: number,
    salaryFilter: string
  ): boolean => {
    const [min, max] = salaryFilter.split("-").map(Number);
    return jobSalary >= min && (max ? jobSalary <= max : true);
  };

  const isWithinDateRange = (datePosted: Date, dateFilter: string): boolean => {
    const now = new Date();
    switch (dateFilter) {
      case "Past 24 hours":
        return now.getTime() - datePosted.getTime() <= 24 * 60 * 60 * 1000;
      case "Past week":
        return now.getTime() - datePosted.getTime() <= 7 * 24 * 60 * 60 * 1000;
      case "Past month":
        return now.getTime() - datePosted.getTime() <= 30 * 24 * 60 * 60 * 1000;
      default:
        return true;
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-4 mb-8 w-full md:w-1/2">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-12 w-full h-[50px] text-lg border-[#797979] rounded-[6px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedState} onValueChange={setSelectedState}>
          <SelectTrigger className="w-full md:w-1/2 h-[50px] text-lg border-[#797979] rounded-[6px]">
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NY">New York</SelectItem>
            <SelectItem value="NJ">New Jersey</SelectItem>
            <SelectItem value="GA">Georgia</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Advanced Filters</h2>
        <div className="flex flex-wrap gap-4">
          <Select
            value={filters.datePosted}
            onValueChange={(value) => handleFilterChange("datePosted", value)}
          >
            <SelectTrigger className="w-[150px] md:w-[200px] md:h-[50px] md:text-lg md:border-[#797979] md:rounded-[6px]">
              <SelectValue placeholder="Date Posted" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any time</SelectItem>
              <SelectItem value="Past 24 hours">Past 24 hours</SelectItem>
              <SelectItem value="Past week">Past week</SelectItem>
              <SelectItem value="Past month">Past month</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={filters.remote}
            onValueChange={(value) => handleFilterChange("remote", value)}
          >
            <SelectTrigger className="w-[150px] md:w-[200px] md:h-[50px] md:text-lg md:border-[#797979] md:rounded-[6px]">
              <SelectValue placeholder="Remote" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="On-site">On-site</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={filters.jobType}
            onValueChange={(value) => handleFilterChange("jobType", value)}
          >
            <SelectTrigger className="w-[150px] md:w-[200px] md:h-[50px] md:text-lg md:border-[#797979] md:rounded-[6px]">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Temporary">Temporary</SelectItem>
              <SelectItem value="Volunteer">Volunteer</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={filters.experienceLevel}
            onValueChange={(value) =>
              handleFilterChange("experienceLevel", value)
            }
          >
            <SelectTrigger className="w-[150px] md:w-[200px] md:h-[50px] md:text-lg md:border-[#797979] md:rounded-[6px]">
              <SelectValue placeholder="Experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
              <SelectItem value="Entry level">Entry level</SelectItem>
              <SelectItem value="Associate">Associate</SelectItem>
              <SelectItem value="Mid-senior level">Mid-senior level</SelectItem>
              <SelectItem value="Director">Director</SelectItem>
              <SelectItem value="Executive">Executive</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={filters.salary}
            onValueChange={(value) => handleFilterChange("salary", value)}
          >
            <SelectTrigger className="w-[150px] md:w-[200px] md:h-[50px] md:text-lg md:border-[#797979] md:rounded-[6px]">
              <SelectValue placeholder="Salary" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="0-40000">$0 - $40,000</SelectItem>
              <SelectItem value="40000-80000">$40,000 - $80,000</SelectItem>
              <SelectItem value="80000-120000">$80,000 - $120,000</SelectItem>
              <SelectItem value="120000-160000">$120,000 - $160,000</SelectItem>
              <SelectItem value="160000-200000">$160,000 - $200,000</SelectItem>
              <SelectItem value="200000-">$200,000+</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="md:h-[50px] md:px-6 bg-primary-600 text-white md:text-lg md:rounded-[6px] transition-all duration-300 hover:bg-primary-50 hover:border hover:border-primary-600 group"
            onClick={resetFilters}
          >
            <span className="group-hover:text-primary-600">Reset Filters</span>
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

const JobCard: React.FC<{ job: Job }> = ({ job }) => (
  <div className="flex flex-col gap-5 w-full sm:border-t sm:border-gray-200 sm:pt-8 sm:relative">
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-2.5 w-full">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#222222]">
          {job.title}
        </h3>
        <div className="flex flex-col gap-2.5 w-full">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-6 h-6 text-[#797979]" />
            <span className="text-lg text-[#222222]">{job.location}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Briefcase className="w-6 h-6 text-[#797979]" />
            <span className="text-lg text-[#222222]">
              ${job.salary.toLocaleString()}/year
            </span>
          </div>
        </div>
        <p className="text-lg text-[#222222]">{job.description}</p>
      </div>
      <div className="flex gap-5">
        <span className="flex items-center px-3 py-1.5 rounded-full text-lg border border-[#797979] text-[#222222]">
          <MapPin className="w-6 h-6 mr-2.5 text-[#797979]" />
          {job.type}
        </span>
        <span className="flex items-center px-3 py-1.5 rounded-full text-lg border border-[#797979] text-[#222222]">
          <Clock className="w-6 h-6 mr-2.5 text-[#797979]" />
          {job.schedule}
        </span>
      </div>
    </div>
    <Link
      href={`/join-our-team/${job.id}`}
      className="w-full sm:w-auto sm:absolute sm:right-0 sm:top-8"
    >
      <button className="w-full sm:w-[162px] h-[65px] flex justify-center items-center px-6 py-2.5 gap-2 bg-primary-600 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:border hover:border-primary-600 group">
        <span className="font-semibold text-xl text-white group-hover:text-primary-600">
          View
        </span>
        <ArrowUpRight className="w-6 h-6 text-white group-hover:text-primary-600" />
      </button>
    </Link>
  </div>
);

export default AllJobs;
