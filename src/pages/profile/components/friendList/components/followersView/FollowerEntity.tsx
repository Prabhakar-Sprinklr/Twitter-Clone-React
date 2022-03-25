import React from 'react';
import "./followersView.css";
import "./followerEntity.css";
import { ToggleFollowingType, FollowerDataType} from '../../types';
const profilePic = require("../../../../../../resources/batman2.jpeg");

type FollowerEntityProps = {
    user : FollowerDataType,
    isFollowing : boolean,
    isGrid : boolean,
    toggleFollowing : ToggleFollowingType,
}

const FollowerEntity = ({user,isFollowing,isGrid,toggleFollowing}:FollowerEntityProps)=>{

    const buttonTask = isFollowing?"Unfollow":"Follow";

    const toggleFollowingHandler = ()=>{
        toggleFollowing(user.userhandle,isFollowing);
    }

    return (
    <li className={isGrid?"list-item--grid-view":""}>
        <article className={isGrid?"friend-entity--grid-view":"friend-entity--list-view"}>
            <div className="profile-pic-container">
                <img className="profile-pic-container__profile-dp" src={profilePic} alt="Unable to load!" />
            </div>
            <div className={`friend-details-container ${isGrid?'friend-details-container--grid-view':''}`}>
                <address className={`friend-details-container__username ${isGrid?'friend-details-container__username--grid-view':''}`}>
                    {user.username}
                </address>
                <address className={`friend-details-container__userid ${isGrid?'friend-details-container__userid--grid-view':''}`}>@{user.userhandle}</address>
            </div>
            <div className="friend-follow-button-container">
                <button type="button" className="follow-button" onClick={toggleFollowingHandler}> {buttonTask} </button>
            </div>
        </article>
    </li>
    )
};

export default FollowerEntity;