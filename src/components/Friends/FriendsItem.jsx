import { Item, Stat, Avatar, Name, } from './Friends.styled';
export function FriendListItem({ friends }) {
  return friends.map(({ id, isOnline, avatar, name }) => (
    <Item key={id}>
      <Stat isOnline={isOnline}>{isOnline}</Stat>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  ));
}