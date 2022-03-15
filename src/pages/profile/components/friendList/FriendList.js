import React from 'react'
import './friendList.css'
import SectionHeader from "../sectionHeader";
import FollowersView from './components/followersView';

function FriendList({grid,followers,toggleFollowing}) {
    return (
        <section className="friend-list-container">
            <SectionHeader text="FOLLOWERS LIST" />
            <main className='friend-list'>
                <FollowersView followers={followers} grid={grid} toggleFollowing={toggleFollowing}/>
            </main>
        </section>
    )
}

export default FriendList;