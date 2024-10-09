import { AcademicCapIcon } from "@heroicons/react/24/solid";
import React from "react";


type Props = {
  title: string;
  dateAndCenter: string;
  description?: string;
};

const Education = ({ title, dateAndCenter, description }: Props) => {
  return (
    <>
      <div className="experience-education-job-container">
        <div className="experience-education-job-icon-container">
          <AcademicCapIcon className="experience-education-job-icon"></AcademicCapIcon>
        </div>
        <div className="experience-education-job-vertical-container">
          <div className="experience-education-job-title">
            <h2>{title}</h2>
          </div>
          <div className="experience-education-job-date">
            <h3>{dateAndCenter}</h3>
          </div>
          {description && <div className="experience-education-job-description">
            <p>{description}</p>
          </div>}
        </div>
      </div>
    </>
  );
};
export default Education;
