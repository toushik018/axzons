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
import Link from 'next/link';

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
        filters.experienceLevel === "" || job.experienceLevel === filters.experienceLevel;
      const matchesSalary = filters.salary === "" || matchesSalaryRange(job.salary, filters.salary);
      const matchesDatePosted = filters.datePosted === "" || isWithinDateRange(job.datePosted, filters.datePosted);

      return matchesSearch && matchesState && matchesRemote && matchesJobType && matchesExperienceLevel && matchesSalary && matchesDatePosted;
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

  const matchesSalaryRange = (jobSalary: number, salaryFilter: string): boolean => {
    const [min, max] = salaryFilter.split('-').map(Number);
    return jobSalary >= min && (max ? jobSalary <= max : true);
  };

  const isWithinDateRange = (datePosted: Date, dateFilter: string): boolean => {
    const now = new Date();
    switch (dateFilter) {
      case 'Past 24 hours':
        return now.getTime() - datePosted.getTime() <= 24 * 60 * 60 * 1000;
      case 'Past week':
        return now.getTime() - datePosted.getTime() <= 7 * 24 * 60 * 60 * 1000;
      case 'Past month':
        return now.getTime() - datePosted.getTime() <= 30 * 24 * 60 * 60 * 1000;
      default:
        return true;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedState} onValueChange={setSelectedState}>
          <SelectTrigger className="w-full md:w-[200px]">
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
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Date Posted" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Any time">Any time</SelectItem>
              <SelectItem value="Past 24 hours">Past 24 hours</SelectItem>
              <SelectItem value="Past week">Past week</SelectItem>
              <SelectItem value="Past month">Past month</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={filters.remote}
            onValueChange={(value) => handleFilterChange("remote", value)}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Remote" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="On-site">On-site</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={filters.jobType}
            onValueChange={(value) => handleFilterChange("jobType", value)}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
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
            onValueChange={(value) => handleFilterChange("experienceLevel", value)}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Experience level" />
            </SelectTrigger>
            <SelectContent>
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
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Salary" />
            </SelectTrigger>
            <SelectContent>
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
            className="bg-primary-600 text-white hover:text-white hover:bg-primary-700"
            onClick={resetFilters}
          >
            Reset Filters
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
  <div className="border-t border-gray-200 pt-8">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
      <div>
        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
        <div className="flex items-center gap-4 text-gray-600 mb-2">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-1" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="w-5 h-5 mr-1" />
            <span>${job.salary.toLocaleString()}/year</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{job.description}</p>
      </div>
      <Link href={`/join-our-team/${job.id}`}>
        <Button className="bg-primary-600 text-white hover:bg-primary-700">
          View
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
    <div className="flex gap-4">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
        <MapPin className="w-4 h-4 mr-1" />
        {job.type}
      </span>
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
        <Clock className="w-4 h-4 mr-1" />
        {job.schedule}
      </span>
    </div>
  </div>
);

export default AllJobs;