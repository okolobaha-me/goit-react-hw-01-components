import PropTypes from 'prop-types';

function Friend({ avatar, name, isOnline }) {
  return (
    <div className="item">
      <span className="status">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={`${avatar}`} alt="User avatar" width="48" />
      <p className="name">{`${name}`}</p>
    </div>
  );
}

export default Friend;

Friend.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
