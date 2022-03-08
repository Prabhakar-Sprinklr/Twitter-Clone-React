import React from 'react'
import ListViewUserEntity from './ListViewUserEntity'

function FollowersListView() {
    let users=[];
    for(let i=0;i<12;i++)
        users.push(i);
    return (
    <ul className="sidebar-option-list">
        {users.map(function(user){
            return <ListViewUserEntity></ListViewUserEntity>
        })}
    </ul>
    );
}

export default FollowersListView