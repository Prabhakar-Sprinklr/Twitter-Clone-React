import pic1 from "../resources/batman-dp.jpeg";
import pic2 from "../resources/batman2.jpeg";
import pic3 from "../resources/default-dp.png";

import {
    HomeIcon,
    ExploreIcon,
    NotificationsIcon,
    MailOutlineIcon,
    BookmarkBorderIcon,
    ListAltIcon,
    PermIdentityIcon,
    MoreHorizIcon,
} from './buttons';

export const OPTION_LIST = [
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

export const getPic = (imageName)=>{
    if(imageName===undefined || imageName.includes("batman-dp")) return pic1;
    else if(imageName.includes("batman2")) return pic2;
    else if(imageName.includes("default"))return pic3;
    return null;
}