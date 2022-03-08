import React from 'react'
import SectionHeader from './SectionHeader'
import '../styles/FriendListContainer.css'
import FollowersGridView from './FollowersGridView'
import FollowersListView from './FollowersListView'

function FriendListContainer({grid}) {
  return (
        <section className="friend-list-container">
            <SectionHeader text="FOLLOWERS LIST"></SectionHeader>
            <main className='friend-list'>
                {grid && <FollowersGridView></FollowersGridView>}
                {(!grid) && <FollowersListView></FollowersListView>}
            </main>
        </section>
  )
}

export default FriendListContainer