import React from 'react'
import GridViewUserEntity from './GridViewUserEntity';
import "../styles/FollowersEntityCommon.css";

function FollowersGridView() {
    let users = [];
    for(let i=0;i<12;i++)
        users.push(i);
    return (
    <ul className="sidebar-option-list list-grid-view">
        {users.map(function(user){
            return <GridViewUserEntity></GridViewUserEntity>
        })}
    </ul>
    )
}

export default FollowersGridView