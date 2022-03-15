export const prefillLocalStorage = ()=>{
    let userListLocal=[];
    let tweetListLocal=[];
    userListLocal.push({
        userhandle:"userhandle",
        username:"Username",
        profilepic:"batman-dp.jpeg",
        followers:['userhandle0',
        'userhandle0',
        'userhandle2',
        'userhandle4',
        'userhandle6',
        'userhandle8',
        'userhandle10',
        'userhandle13',
        'userhandle19',
        'userhandle22'],
        following:['userhandle0',
        'userhandle4',
        'userhandle8',
        'userhandle11'],
    });
    for(let i=0;i<30;i++){
        userListLocal.push({
            userhandle:"userhandle"+i,
            username:"Username"+i,
            profilepic:"batman-dp.jpeg",
            followers:[],
            following:[],
        });
    }
    for(let i=0;i<5;i++){
        let tweet_text="Updated Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            tweet_image="./resources/batman-dp.jpeg",
            userhandle = "userhandle",
            timestamp=Date.now(),
            id=userhandle+"-"+timestamp+"-"+i;
        let content = {
            id:id,
            userhandle:userhandle,
            text:tweet_text,
            image:tweet_image,
            timestamp:timestamp,
        };
        tweetListLocal.push(content);
    }
    localStorage.userListLocal = JSON.stringify(userListLocal);
    localStorage.tweetListLocal = JSON.stringify(tweetListLocal);
    console.log("Prefilling Successful!");
}