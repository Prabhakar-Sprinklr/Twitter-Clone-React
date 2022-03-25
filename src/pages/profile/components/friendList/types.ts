export type FollowerDataType = {
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

export type FollowerType = {
    follower:FollowerDataType,
    isFollowing:boolean,
}

export type ToggleFollowingType = (followerid:string,currentFollowing:boolean)=>void;

export type FriendListProps = {
    isGrid : boolean,
    followers : FollowerType[],
    toggleFollowing : ToggleFollowingType,
}