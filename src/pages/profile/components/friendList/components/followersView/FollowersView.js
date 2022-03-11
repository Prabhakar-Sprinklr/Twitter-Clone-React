import React from 'react'
import FollowerEntity from './FollowerEntity'
import "../../styles/FollowersEntityCommon.css";

function FollowersView({followers,grid}) {

    return (
    <ul className={`sidebar-option-list ${grid?'list-grid-view':''}`}>
        {followers.map(function(follower){
            return <FollowerEntity key={follower.userhandle} user={follower} grid={grid}/>
        })}
    </ul>
    );
}

export default FollowersView