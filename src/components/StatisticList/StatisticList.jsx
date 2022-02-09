import PropTypes from 'prop-types';
import StatisticItem from '../StatisticItem/StatisticItem';

function StatisticList({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{`${title}`}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id}>
            <StatisticItem
              id={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatisticList;

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};
