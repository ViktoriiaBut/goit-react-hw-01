
import userData from './components/Data/userData.json';
import Profile from './components/profile/Profile';
import friends from './components/Data/friends.json';
import FriendList from './components/FriendList/FriendList';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;