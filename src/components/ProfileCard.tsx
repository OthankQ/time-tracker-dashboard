import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: white;
  border-radius: 15px;

  @media (max-width: 376px) {
  }
`;

function ProfileCard() {
  return <StyledDiv></StyledDiv>;
}

export default ProfileCard;
