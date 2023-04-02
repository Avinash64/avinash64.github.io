import React from 'react'
import "./Project.css"


function Project(props) {
    var project = props.project
  return (
    <div className='Project'>
        <div className='projectName'>{project.name}</div>
        <div>{project.summary}</div>
        {/* <div>{project.description}</div> */}
        <div className='tags'>{project.tags.map((e, index) => <div key={index}>{e}</div>)}</div>
        <a href={project.link}>{project.link}</a>
    </div>
  )
}

export default Project