import { ProfileItem } from "./ProfileSoc.styled";
import { ProfileList } from "./ProfileSoc.styled";


export function ProfileSoc({ stats: { followers, views, likes } }) {
  return (
    <ProfileList>
      <ProfileItem>
        <span>Followers</span>
        <span>{followers}</span>
      </ProfileItem>
      <ProfileItem>
        <span>Views</span>
        <span>{views}</span>
      </ProfileItem>
      <ProfileItem>
        <span>Likes</span>
        <span>{likes}</span>
      </ProfileItem>
    </ProfileList>
  );
}