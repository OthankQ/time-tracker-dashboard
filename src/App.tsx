import styled from 'styled-components';

import MainContainer from './components/MainContainer';

const StyledDiv = styled.div`
  background-color: hsl(226, 43%, 10%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <StyledDiv>
      <MainContainer></MainContainer>
    </StyledDiv>
  );
}

export default App;
