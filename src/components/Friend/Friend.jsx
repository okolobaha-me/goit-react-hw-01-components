import PropTypes from 'prop-types';

function Friend({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className="status">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={`${avatar}`} alt="User avatar" width="48" />
      <p className="name">{`${name}`}</p>
    </li>
  );
}

export default Friend;

Friend.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
