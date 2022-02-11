import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import s from './StatisticList.module.css';

function StatisticList({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{`${title}`}</h2>}

      <ul className={`${s.statList}`}>
        {stats.map(stat => (
          <StatisticItem
            key={stat.id}
            id={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
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
