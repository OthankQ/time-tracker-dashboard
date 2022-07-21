import styled from 'styled-components';

import ProfileCard from './ProfileCard';
import BasicCard from './BasicCard';

const StyledContainer = styled.div`
  background-color: hsl(226, 43%, 10%);
  height: 550px;
  width: 1100px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
`;

function MainContainer() {
  return (
    <StyledContainer>
      <ProfileCard></ProfileCard>
      <BasicCard></BasicCard>
      <BasicCard></BasicCard>
      <BasicCard></BasicCard>
      <BasicCard></BasicCard>
      <BasicCard></BasicCard>
      <BasicCard></BasicCard>
    </StyledContainer>
  );
}

export default MainContainer;
