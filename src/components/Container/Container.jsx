import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactionHistory from '../transactions.json';

import Profile from '../Profile';
import StatisticList from '../StatisticList';
import FriendList from '../FriendList';
import TransactionHistory from '../TransactionHistory';

import s from './Container.module.css';

function Container() {
  return (
    <div className={s.container}>
      <FriendList friendsList={friends} />
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
      <TransactionHistory transactionList={transactionHistory} />
    </div>
  );
}

export default Container;
