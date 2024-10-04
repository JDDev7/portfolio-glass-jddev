import React from 'react'
import { githubIcon, siteLink } from '@/shared/assets'

type Props = {
  image: string;
  title: string;
  github?: string;
  directLink?: string;
  techImages?: string[];
  openModal?: () => void;
}

const ProjectCard = (props: Props) => {
  return (
    <div className='project-card'>
      <div className='project-card-image'>
        <img src={props.image} alt={props.title} />
      </div>
      <div className="project-card-text-container">
        <h3>{props.title}</h3>
      </div>
      <div className="techs-and-links-container">
      <div className="project-card-techs">
        {props.techImages?.map((image, index) => (
          <img key={index} src={image} alt={`Tech ${index}`} />
        ))}
      

        
      </div>
      </div>
      <div className="project-bottom">
      <div className="project-links">
      {props.github && <a href={props.github} target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="" /></a>}
      {props.directLink && <a href={props.directLink} target="_blank" rel="noopener noreferrer"><img src={siteLink} alt="" /></a>}
      </div>
      <div className="project-card-open-modal-button">
        <button onClick={props.openModal}>Más info</button>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard