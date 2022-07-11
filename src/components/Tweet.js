import ProfileImage from '../components/ProfileImage'
import User from '../components/User'
import Timestamp from '../components/Timestamp'
import Message from '../components/Message'
import Actions from '../components/Actions'

function Tweet({tweet}) {
  console.log(tweet)
  return (
    <div className="tweet">

      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <User user={tweet.user} />
            <Timestamp timestamp={tweet.timestamp} />
          </span>

        </div>

        <p className="message">
          <Message message={tweet.message} />
        </p>

        <div className="actions">
          <Actions />
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i> 
    </div>
  );
}

export default Tweet;
