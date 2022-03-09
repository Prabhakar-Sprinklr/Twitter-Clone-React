import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import './FriendListContainer.css'
import FollowersGridView from './FollowersGridView/FollowersGridView'
import FollowersListView from './FollowersListView/FollowersListView'

function FriendListContainer({grid}) {
  return (
        <section className="friend-list-container">
            <SectionHeader text="FOLLOWERS LIST"></SectionHeader>
            <main className='friend-list'>
                {grid?<FollowersGridView />:<FollowersListView />}
            </main>
        </section>
  )
}

export default FriendListContainer