import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Container = styled.div`
  width: 400px;
  height: 90px;
  padding: 0 0 0 26px;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  display: flex;

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
  width: 45%;
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
  left: 10px;
`;

interface Data {
  id: number;
  created_at: string;
  author: string;
  story_title: string;
  story_url: string;
}

interface Props {
  item: Data;
  likedItems: Data[];
  setLikedItems: (item: Data[]) => void;
}

const ImageStyle = {
  color: "red",
  fontSize: "25px",
  padding: "0 0 0 10px",
  opacity: 1,
};
// <FaHeart style={ImageStyle} />

const Card = ({ item, likedItems, setLikedItems }: Props) => {
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
          {Date.parse(item.created_at).toLocaleString()} by{" "}
          {item.author !== null ? item.author : "No Author"}
        </Time>
        <Title>
          {item.story_title !== null ? item.story_title : "No Title"}
        </Title>
      </SubContainer>
      <Fav>
        <Checkbox type="checkbox" onChange={handleCheck(item)} />
      </Fav>
    </Container>
  );
};

export default Card;
