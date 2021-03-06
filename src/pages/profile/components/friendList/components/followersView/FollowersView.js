import React from 'react'
import FollowerEntity from './FollowerEntity'
import "./followersView.css";

function FollowersView({followers,isGrid,toggleFollowing}) {
    return (
    <ul className={`followers-list ${isGrid?'followers-list--grid-view':''}`}>
        {followers.map(follower=>(<FollowerEntity key={follower.follower.userhandle} user={follower.follower} isFollowing={follower.isFollowing} toggleFollowing={toggleFollowing} isGrid={isGrid}/>))}
    </ul>
    );
}

export default FollowersView;