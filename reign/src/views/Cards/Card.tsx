import styled from "styled-components";
import { FaHeart, FaRegHeart, FaRegClock } from "react-icons/fa";
import moment from "moment";

const Container = styled.div`
  width: 400px;
  height: 90px;
  padding: 0 0 0 26px;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  display: flex;

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    width: 460px;
  }

  @media (max-width: 500px) {
    width: 400px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  @media (min-width: 768px) {
    width: 460px;
  }
`;

const Fav = styled.div`
  width: 10%;
  margin: 0 0 0 16px;
  padding: 35px 22px 33px;
  border-radius: 6px;
  border: solid 1px #606060;
  background-color: #e8e7e7d4;
  display: flex;
`;

const Time = styled.span`
  width: 65%;
  height: 30px;
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #767676;
  padding-top: 10px;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  width: 100%;
  height: 20px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
`;

const Checkbox = styled.input`
  position: relative;
  right: 15px;
  opacity: 0;
  :hover {
    cursor: pointer;
  }
`;

interface Data {
  id: number;
  created_at: string;
  author: string;
  story_id: number;
  story_title: string;
  story_url: string;
  checked: boolean;
}

interface Props {
  item: Data;
  likedItems: Data[];
  setLikedItems: (item: Data[]) => void;
  isChecked: boolean;
  setNewId: (id: Data[]) => void;
}

const ClockStyle = {
  padding: "0 5px 0 0",
};

const Timer = styled.p`
  font-size: 11px;
`;

const Card = ({
  item,
  likedItems,
  setLikedItems,
  isChecked,
  setNewId,
}: Props) => {
  const handleCheck =
    (item: Data) => (event: React.ChangeEvent<HTMLInputElement>) => {
      var updatedList = [...likedItems];
      if (event.target.checked) {
        updatedList = [...likedItems, item];
      } else {
        updatedList.splice(likedItems.indexOf(item), 1);
      }
      setLikedItems(updatedList);
      setNewId(updatedList);
    };

  const time = moment(item.created_at).fromNow();

  return (
    <Container>
      <SubContainer onClick={() => window.open(item.story_url)}>
        <Time>
          <FaRegClock size="16px" style={ClockStyle} />
          <Timer>
            {time} by
            {item.author !== null ? item.author : "No Author"}
          </Timer>
        </Time>
        <Title>
          {item.story_title !== null ? item.story_title : "No Title"}
        </Title>
      </SubContainer>
      <Fav>
        {isChecked ? (
          <FaHeart
            size="20px"
            style={{
              color: "red",
              position: "relative",
              left: "5px",
            }}
          />
        ) : (
          <FaRegHeart
            size="20px"
            style={{
              color: "red",
              position: "relative",
              left: "5px",
            }}
          />
        )}
        <Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck(item)}
        />
      </Fav>
    </Container>
  );
};

export default Card;
