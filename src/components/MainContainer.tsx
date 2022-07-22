import styled from 'styled-components';

import ProfileCard from './ProfileCard';
import BasicCard from './BasicCard';

const StyledContainer = styled.div`
  height: 550px;
  width: 1100px;
  min-width: 1000px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;

  @media (max-width: 376px) {
  }
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
