import React from 'react'
import './FriendList.css'
import SectionHeader from "../sectionHeader";
import FollowersView from './components/followersView';

function FriendList({grid,followers}) {

    return (
        <section className="friend-list-container">
            <SectionHeader text="FOLLOWERS LIST" />
            <main className='friend-list'>
                <FollowersView followers={followers} grid={grid}/>
            </main>
        </section>
    )
}

export default FriendList;