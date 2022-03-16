// import React,{ useRef, useState, useEffect, useMemo, useCallback } from 'react';
// import '../../homepage.css';
// import NewTweetForm from './components/newTweetForm';
// import TweetList from './components/tweetList';


// /*
// The following two line is to be executed only the very first time
// the app is being run, its to setup the localStorage, which is not
// required once localStorage is setup. 
// */
// // import {prefillLocalStorage} from '../../../../data/dataNoService';

// // prefillLocalStorage();

// const userList = JSON.parse(localStorage.userListLocal);

// function FeedContainer() {

//   const divElementRef = useRef();

//   //not needed to have this function 
//   const getAllTweets = ()=>{
//     return JSON.parse(localStorage.tweetListLocal);
//   }

//   const [tweetList,setTweetList] = useState(()=>getAllTweets());
//   const [editTweetData,setEditTweetData] = useState(undefined);

//   let tweetEntityList = [];

//   const getUserEntity = (userhandle)=>{
//     for(let user of userList){
//       if(user.userhandle === userhandle)
//         return user;
//     }
//   };

//   const prepareTweets = useCallback(()=>{
//     console.log("Prepare tweet called!");
//     let tempTweetList = [];
//     //Use map
//     //------------------------------------------------
//     for(let tweet of tweetList){
//       let userhandle = tweet.userhandle;
//       const user_entity = getUserEntity(userhandle);
//       const content = {
//         id:tweet.id,
//         username:user_entity.username,
//         userid:userhandle,
//         profilepic:user_entity.profilepic,
//         text:tweet.text,
//         image:tweet.image,
//         timestamp:tweet.timestamp,
//       }
//       tempTweetList.push(content);
//     }
//     tempTweetList.sort((a,b)=>(b.timestamp-a.timestamp));
//     return tempTweetList;
//   },[tweetList]);
  
//   tweetEntityList=useMemo(()=>prepareTweets(),[prepareTweets]);

//   const addTweet = useCallback(({userhandle,tweet_text,imageName})=>{
//     const timestamp = Date.now();
//     if(imageName==="") imageName="batman-dp.jpeg";
//     const id=userhandle+"-"+timestamp+"-0";
//     const content = {
//       id:id,
//       //wapis likhne ki zaroorat nhi
//       //---------------------------------------------
//       userhandle:userhandle,
//       text:tweet_text,
//       image:imageName,
//       timestamp:timestamp,
//     };
//     const tempTweetList = [content, ...tweetList];
//     setTweetList(tempTweetList);
//   },[tweetList]);
//   //setTweetList(prevList=>[content,..prevList])
//   //s
//   //...........................................

//   const editTweet = useCallback((id,text,image)=>{
//     let tweet;
//     let tempTweetList = [...tweetList];
//     for(tweet of tempTweetList){
//       if(tweet.id === id)
//         break;
//     }
//     tweet.text=text;
//     tweet.image=image;
//     setTweetList(tempTweetList);
//     setEditTweetData(undefined);
//   },[tweetList]);

//   const deleteTweet = useCallback((tweetId)=>{
//     //Arrow here
//     //--------------------------------------------------
//     const tempTweetList = tweetList.filter(function(tweet){
//       return tweet.id!==tweetId;
//     });
//     setTweetList(tempTweetList);
//   },[tweetList]);

//   const editTweetHandler = useCallback((tweetId,text,image)=>{
//     setEditTweetData({
//       tweetId: tweetId,
//       tweetText: text,
//       imageName: image,
//     });
//     divElementRef.current.scrollTo(0, 0);
//   },[]);

//   useEffect(()=>{
//     localStorage.tweetListLocal = JSON.stringify(tweetList);
//   },[tweetList]);

//   // useEffect(()=>{
//   //   return ()=>{
//   //     console.log("Unmounting!",tweetList);
//   //     localStorage.tweetListLocal = JSON.stringify(tweetList);
//   //   }
//   // },[]);

//   return (
//     <div className='section-container feed-container' ref={divElementRef}>
//         {/* <NewTweetForm newTweetHandler={updateTweetList} tweetid={editTweetId} tweettext={editTweetText}/> */}
//         <NewTweetForm newTweetHandler={addTweet} editTweetHandler={editTweet} editTweetData={editTweetData}/>
//         <TweetList tweetList={tweetEntityList} handleTweetDelete={deleteTweet} handleTweetEdit={editTweetHandler}/>
//     </div>
//   )
// }

// export default FeedContainer

import React,{ useRef, useState, useEffect, useMemo, useCallback } from 'react';
import useTweetData from '../../../../hooks/useTweetData';
import useUserData from '../../../../hooks/useUserData';
import '../../homepage.css';
import NewTweetForm from './components/newTweetForm';
import TweetList from './components/tweetList';


/*
The following two line is to be executed only the very first time
the app is being run, its to setup the localStorage, which is not
required once localStorage is setup. 
*/
// import {prefillLocalStorage} from '../../../../data/dataNoService';

// prefillLocalStorage();

function FeedContainer() {

  const divElementRef = useRef();
  const [tweetList,setTweetList] = useTweetData();
  const [,,getUserEntity] = useUserData();
  const [editTweetData,setEditTweetData] = useState(undefined);

  let tweetEntityList = [];

  const prepareTweets = useCallback(()=>{
    console.log("Prepare tweet called!");
    let tempTweetList = [];
    //Use map
    //------------------------------------------------
    for(let tweet of tweetList){
      let userhandle = tweet.userhandle;
      const user_entity = getUserEntity(userhandle);
      const content = {
        id:tweet.id,
        username:user_entity.username,
        userid:userhandle,
        profilepic:user_entity.profilepic,
        text:tweet.text,
        image:tweet.image,
        timestamp:tweet.timestamp,
      }
      tempTweetList.push(content);
    }
    tempTweetList.sort((a,b)=>(b.timestamp-a.timestamp));
    return tempTweetList;
  },[tweetList,getUserEntity]);
  
  tweetEntityList=useMemo(()=>prepareTweets(),[prepareTweets]);

  const addTweet = useCallback(({userhandle,tweet_text,imageName})=>{
    const timestamp = Date.now();
    if(imageName==="") imageName="batman-dp.jpeg";
    const id=userhandle+"-"+timestamp+"-0";
    const content = {
      id:id,
      //wapis likhne ki zaroorat nhi
      //---------------------------------------------
      userhandle:userhandle,
      text:tweet_text,
      image:imageName,
      timestamp:timestamp,
    };
    const tempTweetList = [content, ...tweetList];
    setTweetList(tempTweetList);
  },[tweetList,setTweetList]);
  //setTweetList(prevList=>[content,..prevList])
  //s
  //...........................................

  const editTweet = useCallback((id,text,image)=>{
    let tweet;
    let tempTweetList = [...tweetList];
    for(tweet of tempTweetList){
      if(tweet.id === id)
        break;
    }
    tweet.text=text;
    tweet.image=image;
    setTweetList(tempTweetList);
    setEditTweetData(undefined);
  },[tweetList,setTweetList]);

  const deleteTweet = useCallback((tweetId)=>{
    //Arrow here
    //--------------------------------------------------
    const tempTweetList = tweetList.filter(function(tweet){
      return tweet.id!==tweetId;
    });
    setTweetList(tempTweetList);
  },[tweetList,setTweetList]);

  const editTweetHandler = useCallback((tweetId,text,image)=>{
    setEditTweetData({
      tweetId: tweetId,
      tweetText: text,
      imageName: image,
    });
    divElementRef.current.scrollTo(0, 0);
  },[]);

  return (
    <div className='section-container feed-container' ref={divElementRef}>
        {/* <NewTweetForm newTweetHandler={updateTweetList} tweetid={editTweetId} tweettext={editTweetText}/> */}
        <NewTweetForm newTweetHandler={addTweet} editTweetHandler={editTweet} editTweetData={editTweetData}/>
        <TweetList tweetList={tweetEntityList} handleTweetDelete={deleteTweet} handleTweetEdit={editTweetHandler}/>
    </div>
  )
}

export default FeedContainer