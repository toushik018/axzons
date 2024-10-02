import React from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { FormData } from './JobApplicationForm';

interface ReviewApplicationProps {
  formData: Partial<FormData>;
  onBack: () => void;
  onSubmit: () => void;
}

const ReviewApplication: React.FC<ReviewApplicationProps> = ({
  formData,
  onBack,
  onSubmit,
}) => {
  const viewFile = (e: React.MouseEvent, file: File | null) => {
    e.preventDefault();
    e.stopPropagation();
    if (file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank');
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#222222]">
        Review your application
      </h3>
      <p className="text-base sm:text-lg text-[#222222]">
        The employer will also receive a copy of your application.
      </p>

      <div className="border-t border-[#797979] pt-4 sm:pt-6">
        <h4 className="text-lg sm:text-2xl font-bold text-[#222222] mb-2 sm:mb-4">
          Contact Info
        </h4>
        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
          <p>
            <span className="font-semibold">Name:</span> {formData.firstName} {formData.lastName}
          </p>
          <p>
            <span className="font-semibold">Phone Country Code:</span>{" "}
            {formData.phoneCountryCode || "Not provided"}
          </p>
          <p>
            <span className="font-semibold">Phone Number:</span>{" "}
            {formData.phoneNumber || "Not provided"}
          </p>
          <p>
            <span className="font-semibold">Email Address:</span>{" "}
            {formData.email}
          </p>
        </div>
      </div>

      <div className="border-t border-[#797979] pt-4 sm:pt-6">
        <h4 className="text-lg sm:text-2xl font-bold text-[#222222] mb-2 sm:mb-4">
          Resume
        </h4>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Button 
            type="button"
            className="w-full sm:w-[400px] h-[55px] bg-[#4E2E87] text-white hover:bg-[#3D2468] px-[30px] py-[15px] rounded-[6px] flex items-center justify-between"
            onClick={(e) => viewFile(e, formData.resume as File)}
            disabled={!formData.resume}
          >
            <span className="font-semibold text-[20px] leading-[25px]">
              Resume
            </span>
            <Eye size={24} className="text-white" />
          </Button>
          <Button 
            type="button"
            className="w-full sm:w-[400px] h-[55px] bg-[#4E2E87] text-white hover:bg-[#3D2468] px-[30px] py-[15px] rounded-[6px] flex items-center justify-between"
            onClick={(e) => viewFile(e, formData.coverLetter as File)}
            disabled={!formData.coverLetter}
          >
            <span className="font-semibold text-[20px] leading-[25px]">
              Cover Letter
            </span>
            <Eye size={24} className="text-white" />
          </Button>
        </div>
      </div>

      <div className="border-t border-[#797979] pt-4 sm:pt-6">
        <h4 className="text-lg sm:text-2xl font-bold text-[#222222] mb-2 sm:mb-4">
          Additional Questions
        </h4>
        <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
          <p>
            <span className="font-semibold">
              Are you legally authorized to work in the United States for any
              employer?
            </span>{" "}
            {formData.legallyAuthorized || "Not answered"}
          </p>
          <p>
            <span className="font-semibold">
              Will you now or will you in the future require employment visa
              sponsorship?
            </span>{" "}
            {formData.requireVisa || "Not answered"}
          </p>
          <p>
            <span className="font-semibold">
              Do you have a valid driver&apos;s license?
            </span>{" "}
            {formData.driversLicense || "Not answered"}
          </p>
        </div>
      </div>

      <div className="border-t border-[#797979] pt-6 flex gap-4 flex-row justify-between items-center">
        <Button
          type="button"
          onClick={onBack}
          className="w-full sm:w-[270px] h-[40px] sm:h-[65px] px-4 sm:px-10 py-2 sm:py-5 text-sm sm:text-xl rounded-full bg-[#7E22CE] text-white hover:bg-[#6B1FAF] transition-all duration-300"
        >
          <span className="font-semibold">Back</span>
        </Button>
        <Button
          type="button"
          onClick={onSubmit}
          className="w-full sm:w-[270px] h-[40px] sm:h-[65px] px-4 sm:px-10 py-2 sm:py-5 text-sm sm:text-xl rounded-full bg-[#7E22CE] text-white hover:bg-[#6B1FAF] transition-all duration-300"
        >
          <span className="font-semibold">Submit Application</span>
        </Button>
      </div>
    </div>
  );
};

export default ReviewApplication;