import React from 'react'

import About from './About';
import OurJournel from './OurJournel';


const HomePage = () => {
  return (
    <>
 
    <div className="page-wrapper">
      <div className="overlay">
        <div className="container">
          <h1 className="title">Research Paper</h1>
          <p className="subtitle">
            Illuminating the Intersections of Language, Thought,
            Creativity, and Culture
          </p>
          <p className="description">
            From Ancient Artifacts to Modern Masterpieces: Your Gateway to a World of Authentic History and <em>Art</em>
          </p>
          <div className="button-group">
            <button className="btn">Submit Paper</button>
            <button className="btn">Track Paper</button>
            <button className="btn">Plagiarism</button>
          </div>
        </div>
      </div>
    </div>
    <About/>
    <OurJournel/>
    
    </>
  )
}

export default HomePage
