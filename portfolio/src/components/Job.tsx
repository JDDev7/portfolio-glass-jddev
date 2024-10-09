import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
type Props = {
  title: string;
  date: string;
  description: string;
};

const Job = ({ title, date, description }: Props) => {
  return (
    <>
      <div className="experience-education-job-container">
        <div className="experience-education-job-icon-container">
          <BriefcaseIcon className="experience-education-job-icon"></BriefcaseIcon>
        </div>
        <div className="experience-education-job-vertical-container">
          <div className="experience-education-job-title">
            <h2>{title}</h2>
          </div>
          <div className="experience-education-job-date">
            <h3>{date}</h3>
          </div>
          <div className="experience-education-job-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
