import React from 'react';
import { 
    SidebarNavOptions,
    HomeIcon,
    ExploreIcon,
    NotificationsIcon,
    MailOutlineIcon,
    BookmarkBorderIcon,
    ListAltIcon,
    PermIdentityIcon,
    MoreHorizIcon,
} from '.';
import "../Homepage.css";


function Sidenav() {
    //Move this const in a separate file
    //------------------------------------------------------------------------------------------------------------------------
    const OPTION_LIST = [
        {
            text:"Home",
            Icon:HomeIcon,
            link:"/"
        },
        {
            text:"Explore",
            Icon:ExploreIcon,
            link:"/"
        },
        {
            text:"Notifications",
            Icon:NotificationsIcon,
            link:"/"
        },
        {
            text:"Messages",
            Icon:MailOutlineIcon,
            link:"/"
        },
        {
            text:"Bookmarks",
            Icon:BookmarkBorderIcon,
            link:"/"
        },
        {
            text:"Lists",
            Icon:ListAltIcon,
            link:"/"
        },
        {
            text:"Profile",
            Icon:PermIdentityIcon,
            link:"/profile"
        },
        {
            text:"More",
            Icon:MoreHorizIcon,
            link:"/"
        },
    ];
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