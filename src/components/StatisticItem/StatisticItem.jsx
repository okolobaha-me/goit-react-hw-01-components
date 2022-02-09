import PropTypes from 'prop-types';
import s from './StatisticItem.module.css';

function StatisticItem({ label, percentage }) {
  return (
    <li className={`${s.item}`}>
      <span className={`${s.label}`}>{`${label}`}</span>
      <span className={`${s.proc}`}>{` ${percentage} %`}</span>
    </li>
  );
}

export default StatisticItem;

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
