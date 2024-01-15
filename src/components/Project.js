import "./ProjectData.css"

import React from 'react'
import ProjectData from "./ProjectData"
import ProjectWork from "./ProjectWork"

const Project = () => {
  return (
    <div className="project">
        <h1 className="project-heading">My Projects</h1>
        <div className="project-container">
            {ProjectWork.map((val, ind) => {
            return (
                <ProjectData
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source} />

            )
            }
            )
            }
        </div>
    </div>
  )
}

export default Project