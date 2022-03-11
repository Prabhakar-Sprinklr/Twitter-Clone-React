import TweetEntity from './components/tweetEntity';
import './tweetList.css'


function TweetList({tweetList}) {
  return (
    <div>
        <ul className='tweetlist'>
            {tweetList.map((tweet)=>{
              return (
                <li key={tweet.id}>
                  <TweetEntity tweet={tweet} />
                </li>
              );
            })}
        </ul>
    </div>
  )
}

export default TweetList