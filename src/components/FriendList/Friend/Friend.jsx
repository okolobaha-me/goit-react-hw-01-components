import PropTypes from 'prop-types';
import s from './Friend.module.css';

function Friend({ avatar, name, isOnline }) {
  return (
    <li className={`${s.item}`}>
      <img
        className={`${s.avatar}`}
        src={`${avatar}`}
        alt="User avatar"
        width="48"
      />
      <p
        className={`${s.name} ${isOnline ? `${s.online}` : `${s.offline}`}`}
      >{`${name}`}</p>
    </li>
  );
}

export default Friend;

Friend.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
