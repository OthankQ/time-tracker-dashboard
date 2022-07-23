import styled from 'styled-components';

import ProfileCard from './ProfileCard';
import StyledBasicCard from './BasicCard';

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
      <StyledBasicCard
        bgColor="hsl(15,100%,70%)"
        imgSrc="/public/images/icon-work.svg"
        category="Work"
        hours="32"
        lastWeekHours="36"
      ></StyledBasicCard>
      <StyledBasicCard
        bgColor="hsl(195, 74%, 62%)"
        imgSrc="/public/images/icon-work.svg"
        category="Work"
        hours="32"
        lastWeekHours="36"
      ></StyledBasicCard>
      <StyledBasicCard
        bgColor="hsl(348, 100%, 68%)"
        imgSrc="/public/images/icon-work.svg"
        category="Work"
        hours="32"
        lastWeekHours="36"
      ></StyledBasicCard>
      <StyledBasicCard
        bgColor="hsl(145, 58%, 55%)"
        imgSrc="/public/images/icon-work.svg"
        category="Work"
        hours="32"
        lastWeekHours="36"
      ></StyledBasicCard>
      <StyledBasicCard
        bgColor="hsl(264, 64%, 52%)"
        imgSrc="/public/images/icon-work.svg"
        category="Work"
        hours="32"
        lastWeekHours="36"
      ></StyledBasicCard>
      <StyledBasicCard
        bgColor="hsl(43,84%,65%)"
        imgSrc="/public/images/icon-work.svg"
        category="Work"
        hours="32"
        lastWeekHours="36"
      ></StyledBasicCard>
    </StyledContainer>
  );
}

export default MainContainer;
