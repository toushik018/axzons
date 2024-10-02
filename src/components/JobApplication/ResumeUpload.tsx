import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { FormData } from './JobApplicationForm';

interface ResumeUploadProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  setValue: UseFormSetValue<FormData>;
}

const ResumeUpload: React.FC<ResumeUploadProps> = ({ register, errors, setValue }) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, fieldName: 'resume' | 'coverLetter') => {
    const file = event.target.files?.[0] || null;
    setValue(fieldName, file);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <h3 className="text-xl sm:text-2xl font-bold">Resume</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="border border-[#797979] rounded-[6px] p-3 sm:p-4 space-y-3 sm:space-y-4">
          <h4 className="text-lg sm:text-xl font-bold">Resume *</h4>
          <p className="text-sm sm:text-base">Be sure to include an updated resume (DOC, DOCX, PDF).</p>
          <div className="border-2 border-dashed border-[#7E22CE] rounded-[6px] p-3 sm:p-4 text-center">
            <Input
              type="file"
              accept=".doc,.docx,.pdf"
              className="hidden"
              id="resume-upload"
              {...register('resume', {
                required: "Resume is required",
                onChange: (e) => handleFileUpload(e, 'resume')
              })}
            />
            <Label htmlFor="resume-upload" className="cursor-pointer">
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Click to Upload</p>
              <p className="text-xs sm:text-sm mb-1 sm:mb-2">4 MB Max File Size</p>
              <svg className="mx-auto w-8 h-8 sm:w-12 sm:h-12 text-[#797979]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </Label>
          </div>
          {errors.resume && <p className="text-red-500 mt-2 text-sm">{errors.resume.message as string}</p>}
        </div>
        <div className="border border-[#797979] rounded-[6px] p-3 sm:p-4 space-y-3 sm:space-y-4">
          <h4 className="text-lg sm:text-xl font-bold">Cover Letter</h4>
          <p className="text-sm sm:text-base">Be sure to include a cover letter (DOC, DOCX, PDF).</p>
          <div className="border-2 border-dashed border-[#7E22CE] rounded-[6px] p-3 sm:p-4 text-center">
            <Input
              type="file"
              accept=".doc,.docx,.pdf"
              className="hidden"
              id="cover-letter-upload"
              {...register('coverLetter', {
                onChange: (e) => handleFileUpload(e, 'coverLetter')
              })}
            />
            <Label htmlFor="cover-letter-upload" className="cursor-pointer">
              <p className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">Click to Upload</p>
              <p className="text-xs sm:text-sm mb-1 sm:mb-2">4 MB Max File Size</p>
              <svg className="mx-auto w-8 h-8 sm:w-12 sm:h-12 text-[#797979]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </Label>
          </div>
          {errors.coverLetter && <p className="text-red-500 mt-2 text-sm">{errors.coverLetter.message as React.ReactNode}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;