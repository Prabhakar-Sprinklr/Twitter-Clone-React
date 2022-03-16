import { useCallback, useEffect, useReducer } from "react";
import { INIT_TWEET_LIST } from "../../data/constants";
import { ACTIONS } from "../../data/constants";

const useTweetData = ()=>{

    const reducer = useCallback((state,action)=>{
        switch(action.type){
            case ACTIONS.ADD_TWEET : {
                const {userhandle,tweet_text} = action.payload;
                let imageName = action.payload.imageName;
                const timestamp = Date.now();
                if(imageName==="") imageName="batman-dp.jpeg";
                const id=userhandle+"-"+timestamp+"-0";
                const content = {
                    id,
                    userhandle,
                    text:tweet_text,
                    image:imageName,
                    timestamp,
                };
                return [content, ...state];
            }
            case ACTIONS.REMOVE_TWEET : {
                const tweetId = action.payload.tweetId;
                return state.filter((tweet)=>(tweet.id!=tweetId));
            }
            case ACTIONS.EDIT_TWEET : {
                const {id,text,image} = action.payload;
                const tweet = state.find((tweet)=>(tweet.id===id));
                state=state.filter((tweet)=>(tweet.id!==id));
                return [...state,{...tweet,text,image}];
            }
            default : return state;
        }
    },[]);

    const [tweetList,dispatch] = useReducer(reducer,localStorage.tweetListLocal?JSON.parse(localStorage.tweetListLocal):INIT_TWEET_LIST);


    useEffect(()=>{
        localStorage.tweetListLocal = JSON.stringify(tweetList);
    },[tweetList]);

    return [tweetList,dispatch];
};

export default useTweetData;
