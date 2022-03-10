import React from 'react'
import './FriendList.css'
import {
    SectionHeader,
} from '.';
import FollowersView from './FollowersView/FollowersView';

function FriendList({grid,followers}) {

    return (
        <section className="friend-list-container">
            <SectionHeader text="FOLLOWERS LIST"></SectionHeader>
            <main className='friend-list'>
                <FollowersView followers={followers} grid={grid}/>
            </main>
        </section>
    )
}

export default FriendList;