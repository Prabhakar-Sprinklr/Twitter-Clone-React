import React from 'react'
import FollowerEntity from './FollowerEntity'
import "../../styles/followersEntityCommon.css";

function FollowersView({followers,grid,toggleFollowing}) {
    return (
    <ul className={`sidebar-option-list ${grid?'list-grid-view':''}`}>
        {followers.map(follower=>(<FollowerEntity key={follower.userEntity.userhandle} user={follower.userEntity} isFollowing={follower.isFollowing} toggleFollowing={toggleFollowing} grid={grid}/>))}
    </ul>
    );
}

export default FollowersView