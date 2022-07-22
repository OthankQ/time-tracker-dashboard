import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  background-color: grey;
  border-radius: 15px;

  @media (max-width: 376px) {
  }
`;

function BasicCard() {
  return <StyledDiv></StyledDiv>;
}

export default BasicCard;
