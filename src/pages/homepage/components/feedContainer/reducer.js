import { ACTIONS } from "../../../../data/constants";
const reducer = (state,action)=>{
    switch(action.type){
        case ACTIONS.ADD_TWEET : {
            const {userhandle,tweet_text,username,profilepic} = action.payload;
            let imageName = action.payload.imageName;
            const timestamp = Date.now();
            if(imageName === "") imageName="batman-dp.jpeg";
            const id=userhandle+"-"+timestamp+"-0";
            const content = {
                id,
                userhandle,
                username,
                profilepic,
                text:tweet_text,
                image:imageName,
                timestamp,
            };
            return [content, ...state];
        }
        case ACTIONS.REMOVE_TWEET : {
            const tweetId = action.payload.tweetId;
            return state.filter((tweet)=>(tweet.id!==tweetId));
        }
        case ACTIONS.EDIT_TWEET : {
            const {id,text,image} = action.payload;
            //The following copying is necessary becuase we cant make direct changes
            //in the arguments of the function. We need to conserve the arguments.
            const tempState = [...state];
            const tweet = tempState.find((tweet)=>(tweet.id===id));
            tweet.text=text;
            tweet.image=image;
            return tempState;
        }
        default : return state;
    }
};

export default reducer;