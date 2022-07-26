import styled from 'styled-components';
export interface basicCardProps {
  bgColor: string;
  imgSrc: string;
  category: string;
  hours: string;
  lastWeekHours: string;
  className?: string;
}

const BasicCard: React.FunctionComponent<basicCardProps> = (props) => {
  return (
    <div className={props.className}>
      <div className="main-ctn">
        <div className="content-ctn">
          <div className="category-ctn">
            <div className="category-text">
              <p>{props.category}</p>
            </div>
            <div className="menu-btn-ctn">
              <img src="/public/images/icon-ellipsis.svg" alt="menu" />
            </div>
          </div>
          <div className="hours-ctn">
            <p>{props.hours}hrs</p>
          </div>
          <div className="last-week-hrs-ctn">
            <p>Last Week - {props.lastWeekHours}hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledBasicCard = styled(BasicCard)`
  display: flex;
  flex-direction: column;

  .main-ctn {
    display: flex;
    background-color: ${(props) => props.bgColor};
    border-radius: 15px;
    flex-direction: column-reverse;
    height: 100%;

    .content-ctn {
      display: flex;
      flex-direction: column;
      height: 80%;
      background-color: hsl(235, 46%, 20%);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      padding: 30px;

      .category-ctn {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .category-text {
          p {
            color: white;
          }
        }

        .menu-btn-ctn {
          color: white;
        }
      }

      .hours-ctn {
        padding-top: 20px;
        p {
          font-size: 45px;
          font-weight: 300;
          color: white;
        }
      }

      .last-week-hrs-ctn {
        color: white;
        padding-top: 15px;
      }
    }
  }
`;

export default StyledBasicCard;
