export type EditTweetInformationType = {
    tweetId : string,
    tweetText : string,
    imageName : string,
};

export type EditTweetParameterType = {
    id : string,
    text : string,
    image : string,
};

export type EditTweetHandlerType = {
  tweetId:string,
  text:string,
  image:string,
};

export type TweetType = {
  id: string, 
  userhandle: string, 
  username: string, 
  profilepic:string, 
  text: string, 
  image: string,
  timestamp: number,
}

export type DispatchFunctionType = (action: object) => object;