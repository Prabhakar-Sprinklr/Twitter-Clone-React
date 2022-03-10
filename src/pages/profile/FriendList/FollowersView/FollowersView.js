import React from 'react'
import FollowerEntity from './FollowerEntity'
import "../styles/FollowersEntityCommon.css";

function FollowersView({followers,grid}) {

    const handleClick = (event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.currentTraget);
    }
    return (
    // <ul className="sidebar-option-list" onClick={handleClick}>
    <ul className={`sidebar-option-list ${grid?'list-grid-view':''}`} onClick={handleClick}>
        {followers.map(function(follower){
            return <FollowerEntity key={follower.userhandle} user={follower} grid={grid}/>
        })}
    </ul>
    );
}

export default FollowersView