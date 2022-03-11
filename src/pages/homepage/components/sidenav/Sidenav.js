import React from 'react';
import SidebarNavOptions from './components/sidebarNavOptions';
import {OPTION_LIST} from '../../../../data/constants';
import "../../Homepage.css";


function Sidenav() {
    //Move this const in a separate file
    //------------------------------------------------------------------------------------------------------------------------
    
    return (
        <nav className='section-container sidebar-container'>
            <ul className="sidebar-option-list">
                {OPTION_LIST.map(function(item){
                    return <SidebarNavOptions key={item.text} text={item.text} Icon={item.Icon} link={item.link} />
                })}
            </ul>
        </nav>
    )
}

export default Sidenav;