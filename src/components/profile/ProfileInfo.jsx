import { Description, Avatar, Text } from './ProfileInfo.styled';


export function ProfileInfo({ avatar, username, tag, location }) {
  return (
    <Description>
      <Avatar src={avatar} alt="User avatar" />
      <Text>{username}</Text>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </Description>
  );
}