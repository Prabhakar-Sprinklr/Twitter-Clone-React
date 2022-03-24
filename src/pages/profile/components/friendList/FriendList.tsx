import React from 'react'
import './friendList.css'
import SectionHeader from "../sectionHeader";
import FollowersView from './components/followersView';

type FollowerDataType = {
    userhandle : string,
    username : string,
    profilepic : string,
};

export type UserType = {
    userhandle:string,
    username:string,
    profilepic:string,
    followers: FollowerDataType[],
    following: string[],
};

type FollowerType = {
    follower:UserType,
    isFollowing:boolean,
}

export type ToggleFollowingType = (followerid:string,currentFollowing:boolean)=>void;

export type FriendListProps = {
    isGrid : boolean,
    followers : FollowerType[],
    toggleFollowing : ToggleFollowingType,
}

function FriendList({isGrid,followers,toggleFollowing}:FriendListProps) {
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