import { INIT_TWEET_LIST } from "../../data/constants";
import useLocalStorage from "../useLocalStorage";
import reducer from "./reducer";

const useTweetData = ()=>{

    const [tweetList,dispatch] = useLocalStorage("tweetListLocal",INIT_TWEET_LIST,reducer);

    return [tweetList,dispatch];
};

export default useTweetData;
