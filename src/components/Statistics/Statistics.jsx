import PropTypes from 'prop-types';
import { StatsWrapper } from './Statistics.styled';
import { StatsList } from './Statistics.styled';
import { StatsItem } from './Statistics.styled';
import { StatsTitle } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsWrapper>
       {title && <StatsTitle>{title}</StatsTitle>}
       <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} label={label}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </StatsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  label: PropTypes.string,
  percentage: PropTypes.number,
  id: PropTypes.string,
};