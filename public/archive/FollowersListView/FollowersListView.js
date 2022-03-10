import React from 'react'
import ListViewUserEntity from './ListViewUserEntity'

function FollowersListView({followers}) {

    const handleClick = (event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.currentTraget);
    }

    return (
    <ul className="sidebar-option-list" onClick={handleClick}>
        {followers.map(function(follower){
            return <ListViewUserEntity key={follower.userhandle} user={follower} />
        })}
    </ul>
    );
}

export default FollowersListView