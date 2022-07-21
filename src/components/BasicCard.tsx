import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: hsl(226, 43%, 10%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function BasicCard() {
  return <StyledDiv></StyledDiv>;
}

export default BasicCard;
