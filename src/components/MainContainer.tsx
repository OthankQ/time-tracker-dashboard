import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: hsl(226, 43%, 10%);
  border: 1px solid white;
  height: 500px;
  width: 1000px;
`;

function MainContainer() {
  return <StyledContainer></StyledContainer>;
}

export default MainContainer;
