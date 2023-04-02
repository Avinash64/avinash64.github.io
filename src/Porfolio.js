import React from 'react'
import Header from './Components/Header'
import Project from './Components/Project'
import "./Portfolio.css"
var projects = require('./Projects/projects.json')


function Porfolio() {
    return (

        <div className='page'>
            <Header />

            <div className='intro'>Hi my name is Av</div>
            <div className='about'>I have a background in computer science here are some of my skills and projects</div>
            <div className='resume'>Resume</div>
            <div className='Skills'>Skills</div>
            <div>projects</div>
            <div className='projects'>
                {projects.map((e,index) => 
                <Project key={index} project={e}>project</Project>
                )}
            </div>

        </div>
    )
}

export default Porfolio