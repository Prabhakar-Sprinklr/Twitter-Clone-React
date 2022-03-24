import React from 'react';
import './sectionHeader.css';

type SectionHeaderProps = {
    text:string,
}

function SectionHeader({text}:SectionHeaderProps):JSX.Element{
  return (
    <div className="section-header-container">
        <header className="section-header-container__header" > {text} </header>
    </div>
  )
}

export default SectionHeader