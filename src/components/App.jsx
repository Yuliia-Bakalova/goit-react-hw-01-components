import user from '../components/json/user.json';
import data from '../components/json/data.json';
import friends from '../components/json/friends.json';
import transactions from '../components/json/transactions.json'


import { Profile } from './profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/Friends';
import { TransactionHistory } from './Transaction/Transaction';
import { Section } from './App.styled';


export const App = () => {
  return (
    <Section>
      <Profile user={user} />
      {<Statistics title="Upload stats" stats={data} /> }
      { <FriendsList friends={friends} /> }
      <TransactionHistory items={transactions} />
    </Section>
  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
