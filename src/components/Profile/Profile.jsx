import PropTypes from 'prop-types';
import {
  Conteiner,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
} from './Profile.styled';
export default function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <Conteiner>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <Tag>Followers</Tag>
          <Location>{followers}</Location>
        </li>
        <li>
          <Tag>Views</Tag>
          <Location>{views}</Location>
        </li>
        <li>
          <Tag>Likes</Tag>
          <Location>{likes}</Location>
        </li>
      </Stats>
    </Conteiner>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
