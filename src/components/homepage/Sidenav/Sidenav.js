import React from 'react';
import SidebarNavOptions from './SidebarNavOptions/SidebarNavOptions';
import "../Homepage.css";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ListItem } from '@mui/material';

function Sidenav() {
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