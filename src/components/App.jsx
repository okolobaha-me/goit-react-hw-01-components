import Profile from './Profile/Profile';
import StatisticList from './StatisticList/StatisticList';
import user from './user.json';
import data from './data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList stats={data} />
    </div>
  );
};
