import React from 'react'
import FollowerEntity from './FollowerEntity'
import "./followersView.css";

function FollowersView({followers,grid,toggleFollowing}) {
    return (
    <ul className={`followers-list ${grid?'followers-list--grid-view':''}`}>
        {followers.map(follower=>(<FollowerEntity key={follower.follower.userhandle} user={follower.follower} isFollowing={follower.isFollowing} toggleFollowing={toggleFollowing} grid={grid}/>))}
    </ul>
    );
}

export default FollowersView;