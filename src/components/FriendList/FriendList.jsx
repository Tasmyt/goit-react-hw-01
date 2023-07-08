import PropTypes from 'prop-types';
import { Name, Stats } from '../Profile/Profile.styled';
import { Item, Statis } from '../Statistics/Statistics.styled';
import { Avatar, Status } from './FriendList.styled';
export default function FriendList({ friends }) {
  return (
    <Statis>
      <Stats>
        {friends.map(dataFriend => (
          <Item key={dataFriend.id}>
            <Status stat={+dataFriend.isOnline}></Status>
            <Avatar src={dataFriend.avatar} alt={dataFriend.name} width="48" />
            <Name>{dataFriend.name}</Name>
          </Item>
        ))}
      </Stats>
    </Statis>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
