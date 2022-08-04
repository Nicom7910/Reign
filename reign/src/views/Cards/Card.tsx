import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Container = styled.div`
  width: 550px;
  height: 90px;
  padding: 0 0 0 26px;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  display: flex;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Fav = styled.div`
  width: 68px;
  margin: 0 0 0 16px;
  padding: 35px 22px 33px;
  border-radius: 6px;
  border: solid 1px #606060;
  background-color: #e8e7e7d4;
  display: flex;
`;

const Time = styled.span`
  width: 200px;
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
`;

const Title = styled.span`
  width: 440px;
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
  left: 10px;
`;

interface Data {
  created_at: string;
  author: string;
  story_title: string;
  story_url: string;
}

interface Props {
  item: Data;
}

const ImageStyle = {
  color: "red",
  fontSize: "25px",
  padding: "0 0 0 10px",
  opacity: 1,
};
// <FaHeart style={ImageStyle} />

const Card = ({ item }: Props) => {
  const [likedItems, setLikedItems] = useState<Array<Data>>([]);

  const handleCheck =
    (item: Data) => (event: React.ChangeEvent<HTMLInputElement>) => {
      var updatedList = [...likedItems];
      if (event.target.checked) {
        updatedList = [...likedItems, item];
      } else {
        updatedList.splice(likedItems.indexOf(item), 1);
      }
      setLikedItems(updatedList);
    };

  return (
    <Container>
      <SubContainer>
        <Time>
          {Date.parse(item.created_at).toLocaleString()} by {item.author}
        </Time>
        <Title> {item.story_title}</Title>
      </SubContainer>
      <Fav>
        <Checkbox type="checkbox" onChange={handleCheck(item)} />
      </Fav>
    </Container>
  );
};

export default Card;
