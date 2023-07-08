import PropTypes from 'prop-types';
import { Tag, Location, Stats } from '../Profile/Profile.styled';
import { Statis, Title, Item } from './Statistics.styled';
export default function Statistics({ title, stats }) {
  return (
    <Statis>
      {title && <Title>{title}</Title>}

      <Stats>
        {stats.map(data => (
          <Item key={data.id}>
            <Tag>{data.label}</Tag>
            <Location>{data.percentage}</Location>
          </Item>
        ))}
      </Stats>
    </Statis>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
