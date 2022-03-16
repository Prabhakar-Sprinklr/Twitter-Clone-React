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

export const INIT_TWEET_LIST = [
    {id: 'userhandle-1647335082521-0', userhandle: 'userhandle', text: 'Write Something Good ok updated 2!', image: 'batman-dp.jpeg', timestamp: 1647335082521},
    {id: 'userhandle-1647334937790-0', userhandle: 'userhandle', text: 'Write Something Good ok !', image: 'batman-dp.jpeg', timestamp: 1647334937790},
    {id: 'userhandle-1647334876394-0', userhandle: 'userhandle', text: 'Write Something Good 1!', image: 'default-dp.png', timestamp: 1647334876394},
    {id: 'userhandle-1647331549495-0', userhandle: 'userhandle', text: 'Write Something Good ok updated again!', image: 'batman2.jpeg', timestamp: 1647331549495},
    {id: 'userhandle-1647329357954-0', userhandle: 'userhandle', text: 'Updated Lorem Ipsum is simply dummy text of the pr…pe and scrambled it to make a type specimen book.', image: 'batman-dp.jpeg', timestamp: 1647329357954},
    {id: 'userhandle-1647329357954-1', userhandle: 'userhandle', text: 'Updated Lorem Ipsum is simply dummy text of the pr…pe and scrambled it to make a type specimen book.', image: 'batman-dp.jpeg', timestamp: 1647329357954},
    {id: 'userhandle-1647329357954-2', userhandle: 'userhandle', text: 'Updated Lorem Ipsum is simply dummy text of the pr…pe and scrambled it to make a type specimen book.', image: 'batman-dp.jpeg', timestamp: 1647329357954},
    {id: 'userhandle-1647329357954-3', userhandle: 'userhandle', text: 'Updated Lorem Ipsum is simply dummy text of the pr…pe and scrambled it to make a type specimen book.', image: 'batman-dp.jpeg', timestamp: 1647329357954},
    {id: 'userhandle-1647329357954-4', userhandle: 'userhandle', text: 'Updated Lorem Ipsum is simply dummy text of the pr…pe and scrambled it to make a type specimen book.', image: 'batman-dp.jpeg', timestamp: 1647329357954},
];

export const INIT_USER_LIST = [
    {userhandle: 'userhandle', username: 'Username', profilepic: 'batman-dp.jpeg', followers: ['userhandle0','userhandle1','userhandle2'], following: ['userhandle0','userhandle2']},
    {userhandle: 'userhandle0', username: 'Username', profilepic: 'batman-dp.jpeg', followers: ['userhandle'], following: ['userhandle']},
    {userhandle: 'userhandle1', username: 'Username', profilepic: 'batman-dp.jpeg', followers: [], following: ['userhandle']},
    {userhandle: 'userhandle2', username: 'Username', profilepic: 'batman-dp.jpeg', followers: ['userhandle'], following: ['userhandle']},
];
export const ACTIONS = {
    FOLLOW:'follow',
    UNFOLLOW:'unfollow',
}