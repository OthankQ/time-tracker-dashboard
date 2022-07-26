import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: hsl(236, 44%, 20%);
  border-radius: 15px;
  color: white;
  flex-direction: column;

  .inner-container {
    height: 70%;
    position: relative;
    width: 100%;
    background-color: hsl(246, 80%, 60%);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 30px;

    .profile-container {
      height: 150px;
      width: 100%;

      img {
        width: 100px;
        border: 2px solid white;
        border-radius: 50%;
      }
    }

    .text-container {
      display: flex;
      flex-direction: column;
      width: 100px;

      p,
      h1 {
        font-weight: 300;
        letter-spacing: 1px;
        padding: 5px 0px;
      }

      h1 {
        font-size: 2.3rem;
      }
    }
  }

  .bottom-container {
    padding: 30px;

    ol {
      padding: 10px 0;
      color: grey;
      letter-spacing: 1px;
    }

    .active {
      color: white;
    }
  }

  @media (max-width: 376px) {
  }
`;

function ProfileCard() {
  return (
    <StyledDiv>
      <div className="inner-container">
        <div className="profile-container">
          <img src="../images/image-jeremy.png" alt="profile" />
        </div>
        <div className="text-container">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="bottom-container">
        <ul>
          <ol>Daily</ol>
          <ol className="active">Weekly</ol>
          <ol>Monthly</ol>
        </ul>
      </div>
    </StyledDiv>
  );
}

export default ProfileCard;
