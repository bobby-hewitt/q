import React, { Component } from 'react'
import './style.css'

const SectionBox = (props) => (
  <div 
    className="sectionBoxContainer"
    style={{
      height:props.stemHeight ? 210 + props.stemHeight + 'px' : '220px'
    }}>
    <div className="sectionBoxOuter">
    </div>
    <div className="sectionBoxInner"
      style={{
        background:props.background
      }}>
    </div>

    <div className="sectionBoxStem">
    </div>
  </div>
 

);

export default SectionBox

