import React from 'react';
import './sectionHeader.css';

function SectionHeader({text}) {
  return (
    <div className="friend-list-header-container">
        <header className="friend-list-header" > {text} </header>
    </div>
  )
}

export default SectionHeader