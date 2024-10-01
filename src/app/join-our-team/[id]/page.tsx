import React from 'react';
import { jobs } from '@/constants/jobs';
import JobDetails from '@/components/JoinOurTeam/JobDetails';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

const JobDetailsPage = ({ params }: { params: { id: string } }) => {
  const job = jobs.find((j) => j.id === params.id);

  if (!job) {
    notFound();
  }

  return <JobDetails job={job} />;
};

export default JobDetailsPage;