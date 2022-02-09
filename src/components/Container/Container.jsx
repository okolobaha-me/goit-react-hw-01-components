import s from './Container.module.css';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import Profile from '../Profile/Profile';
import StatisticList from '../StatisticList/StatisticList';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactionHistory from '../transactions.json';

function Container() {
  return (
    <div className={s.container}>
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
      <FriendList friendsList={friends} />
      <TransactionHistory transactionList={transactionHistory} />
    </div>
  );
}

export default Container;
