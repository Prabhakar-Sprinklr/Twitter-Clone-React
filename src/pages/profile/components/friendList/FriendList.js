import React from 'react'
import './friendList.css'
import SectionHeader from "../sectionHeader";
import FollowersView from './components/followersView';

function FriendList({isGrid,followers,toggleFollowing}) {
    return (
        <section className="friend-list-container">
            <SectionHeader text="FOLLOWERS LIST" />
            <main className='friend-list-container__friend-list'>
                <FollowersView followers={followers} isGrid={isGrid} toggleFollowing={toggleFollowing}/>
            </main>
        </section>
    )
}

export default FriendList;