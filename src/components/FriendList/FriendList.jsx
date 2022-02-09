import Friend from '../Friend/Friend';
import PropTypes from 'prop-types';

function FriendList({ friendsList }) {
  return (
    <ul className="friend-list">
      {friendsList.map(friend => (
        <li key={friend.id}>
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = {
  friendsList: PropTypes.array.isRequired,
};
