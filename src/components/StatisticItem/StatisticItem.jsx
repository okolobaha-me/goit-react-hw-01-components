import PropTypes from 'prop-types';

function StatisticItem({ label, percentage }) {
  return (
    <div className="item">
      <span className="label">{`${label}`}</span>
      <span className="percentage">{` ${percentage} %`}</span>
    </div>
  );
}

export default StatisticItem;

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
