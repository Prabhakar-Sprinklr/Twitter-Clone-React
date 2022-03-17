import React from 'react'
import FollowerEntity from './FollowerEntity'
import "./followersView.css";

function FollowersView({followers,grid,toggleFollowing}) {
    return (
    <ul className={`followers-list ${grid?'followers-list--grid-view':''}`}>
        {followers.map(follower=>(<FollowerEntity key={follower.userEntity.userhandle} user={follower.userEntity} isFollowing={follower.isFollowing} toggleFollowing={toggleFollowing} grid={grid}/>))}
    </ul>
    );
}

export default FollowersView;