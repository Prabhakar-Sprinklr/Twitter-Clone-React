import React, { useState } from 'react';
import "../../styles/FollowersEntityCommon.css";
import "./FollowerEntity.css";
import profilePic from "../../../../../../resources/batman2.jpeg";
import {takeAction} from "../../../../../../data/service/profileService";

const user1 = "userhandle";

const FollowerEntity = ({user,grid})=>{

    const [isFollowing,setFollowing] = useState(user.following);

    const buttonTask = isFollowing?"Unfollow":"Follow";
    
    const addFollower = (event)=>{
        const task = event.target.dataset.task;
        const user2 = event.target.dataset.userhandle;
        takeAction({user1,user2,task});
        setFollowing(!isFollowing);
    }

    return (
    <li className={grid?"list-item-grid-view":""}>
        <article className={grid?"friend-entity-grid-view":"friend-entity"}>
            <div className="profile-pic-container">
                <img className="tweet-profile-dp" src={profilePic} alt="Unable to load!" />
            </div>
            <div className={`friend-details-container ${grid?'friend-details-container-grid-view':''}`}>
                <address className={`username ${grid?'username-grid-view':''}`}>
                    {user.username}
                </address>
                <address className={`userid ${grid?'userid-grid-view':''}`}>@{user.userhandle}</address>
            </div>
            <div className="friend-follow-button-container">
                <button type="button" className="follow-button" data-task={buttonTask} data-userhandle={user.userhandle} onClick={addFollower}> {buttonTask} </button>
            </div>
        </article>
    </li>
    )
};

export default FollowerEntity;