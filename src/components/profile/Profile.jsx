import PropTypes from 'prop-types';
import { ProfileWrapper } from "./Profile.styled";
import { ProfileInfo } from './ProfileInfo';
import { ProfileSoc } from './ProfileSoc';

export const Profile = ({
  user: { username, tag, location, avatar, stats }
}) => {
    return  <ProfileWrapper>
      <ProfileInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileSoc stats={stats} />
    </ProfileWrapper>;
};

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
    }),
};