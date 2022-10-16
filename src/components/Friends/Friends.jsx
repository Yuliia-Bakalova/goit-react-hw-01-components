import PropTypes from 'prop-types';
import { FriendListItem } from './FriendsItem';
import { FriendsLi } from './Friends.styled';

export function FriendsList({ friends }) {
  return (
    <FriendsLi>
      <FriendListItem friends={friends} />
    </FriendsLi>
  );
}


FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};