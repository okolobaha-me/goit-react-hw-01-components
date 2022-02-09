import Profile from './Profile/Profile';
import StatisticList from './StatisticList/StatisticList';
import FriendList from './FriendList/FriendList';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';

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
      <FriendList friendsList={friends} />
    </div>
  );
};
