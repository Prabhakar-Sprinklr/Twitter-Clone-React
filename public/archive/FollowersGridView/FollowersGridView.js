import React from 'react'
import GridViewUserEntity from './GridViewUserEntity';
import "../styles/FollowersEntityCommon.css";

function FollowersGridView({followers}) {
    return (
    <ul className="sidebar-option-list list-grid-view">
        {followers.map(function(follower){
            return <GridViewUserEntity key={follower.userhandle} user={follower}/>
        })}
    </ul>
    )
}

export default FollowersGridView