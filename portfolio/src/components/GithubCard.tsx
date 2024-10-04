import React from 'react'
import { githubLinks } from '@/shared/constants'
type Props = {
    title: string,
    image: string,
}

const GithubCard = (props: Props) => {
  return (
    <div className='project-card'>
    <div className='project-card-image'>
      <a href={githubLinks.gitHub} target='_blank' rel='noopener noreferrer'><img src={props.image} alt={props.title} /></a>
    </div>
    <div className="project-card-text-container">
      <h3>{props.title}</h3>
    </div>
    </div>
  )
}

export default GithubCard