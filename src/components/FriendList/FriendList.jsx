import Friend from '../Friend/Friend';
import s from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friendsList }) {
  return (
    <ul className={`${s.friendList}`}>
      {friendsList.map(friend => (
        <Friend
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friendsList: PropTypes.array.isRequired,
};
