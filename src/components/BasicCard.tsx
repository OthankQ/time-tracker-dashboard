import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  background-color: grey;
  border-radius: 15px;

  @media (max-width: 376px) {
  }
`;

export type basicCardProps = {
  bgColor: string;
  imgSrc: string;
  category: string;
  hours: string;
  lastWeekHours: string;
};

function BasicCard(props: basicCardProps) {
  return <StyledDiv></StyledDiv>;
}

export default BasicCard;
