import React from 'react';
import './sectionHeader.css';

function SectionHeader({text}) {
  return (
    <div className="section-header-container">
        <header className="section-header-container__header" > {text} </header>
    </div>
  )
}

export default SectionHeader