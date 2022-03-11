let data = {

    initialization : false,

    init(){

        // TO BE DONE WHEN THE APP IS RUNNED THE VERY FIRST TIME
        console.log("Data Initialized !");
        if(this.initialization===true) return;
        this.initialization=true;
        console.log("Initialization Being Done");
        if(localStorage.tweet_data === undefined || localStorage.user_data === undefined){
            this.tweet_collection=new Map();
            this.user_data=new Map();
            this.user_data.set("userhandle",{
                userhandle:"userhandle",
                username:"Username",
                profilepic:"batman-dp.jpeg",
                followers:[],
                following:[],
            });
            for(let i=0;i<30;i++){
                this.user_data.set("userhandle"+i,{
                    userhandle:"userhandle"+i,
                    username:"Username"+i,
                    profilepic:"batman-dp.jpeg",
                    followers:[],
                    following:[],
                });
                if(i%4===0)
                    this.addFollower("userhandle","userhandle"+i);
                if(i%3===0)
                    this.addFollower("userhandle"+i,"userhandle");
            }
            for(let i=0;i<5;i++){
                let tweet_text="Updated Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
                let tweet_image="./resources/batman-dp.jpeg";
                let userhandle = "userhandle"
                let user = data.getUserEntity(userhandle);
                if(user===undefined) continue;
                let timestamp=Date.now();
                let unique_id=userhandle+"-"+timestamp+"-"+i;
                let content = {
                    userhandle:userhandle,
                    text:tweet_text,
                    image:tweet_image,
                    timestamp:timestamp,
                };
                this.tweet_collection.set(unique_id,content);
            }
            this.saveToLocal();
            return;
        }

        //Once the local storage is set up the above code doesnt run, and all reading is done from here.
        this.tweet_collection=new Map(JSON.parse(localStorage.tweet_data));
        this.user_data=new Map(JSON.parse(localStorage.user_data));
    },

    addFollower(user1,user2){
        let user_entity1=this.user_data.get(user1);
        let user_entity2=this.user_data.get(user2);
        user_entity1.following.push(user2);
        user_entity2.followers.push(user1);
    },

    removeFollower(user1,user2){
        let user_entity1=this.user_data.get(user1);
        let user_entity2=this.user_data.get(user2);
        user_entity1.following = user_entity1.following.filter(function(userid){
            return userid!==user2;
        });
        user_entity2.followers = user_entity2.followers.filter(function(userid){
            return userid!==user1;
        })
    },

    getUserEntity(userid){
        return this.user_data.get(userid);
    },

    saveUserDataToLocal(){
        localStorage.user_data = JSON.stringify(Array.from(this.user_data.entries()));
    },

    saveToLocal(){
        console.log("Called");
        localStorage.tweet_data = JSON.stringify(Array.from(this.tweet_collection.entries()));
        this.saveUserDataToLocal();
    },

}

export default data;