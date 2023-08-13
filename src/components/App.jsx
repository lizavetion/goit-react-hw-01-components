import user from './Profile/user.json';
import Profile from './Profile/Profile';

import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';

import friends from './FriendsList/friends.json';
import FriendList from './FriendsList/FriendList';

import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
