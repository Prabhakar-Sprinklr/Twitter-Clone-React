import React from 'react';
import "../../styles/followersEntityCommon.css";
import "./followerEntity.css";
import profilePic from "../../../../../../resources/batman2.jpeg";



const FollowerEntity = ({user,isFollowing,grid,toggleFollowing})=>{

    const buttonTask = isFollowing?"Unfollow":"Follow";

    const toggleFollowingHandler = ()=>{
        toggleFollowing(user.userhandle,isFollowing);
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
                <button type="button" className="follow-button" onClick={toggleFollowingHandler}> {buttonTask} </button>
            </div>
        </article>
    </li>
    )
};

export default FollowerEntity;