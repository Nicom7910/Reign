import Card from "./views/Cards/Card";
import Header from "./views/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Filter from "./views/Filters/Filters";
import { Pagination } from "@mui/material";
import News from "./views/News/News";

const Container = styled.div`
  width: 100%;
`;

const SubContainer = styled.div`
  padding: 50px 50px 50px 50px;

  @media (min-width: 600px) {
    padding: 50px 150px 50px 150px;
  }

  @media (min-width: 1000px) {
    padding: 50px 20px 50px 20px;
  }

  @media (min-width: 1400px) {
    padding: 50px 150px 50px 150px;
  }
`;

const CardsContainer = styled.section`
  height: 30rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding-top: 20px;

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
    padding-left: 80px;
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
    padding-left: 100px;
  }
`;

const PaginationContainer = styled.section`
  position: relative;
  bottom: 4rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

const getData = async (filter: string) => {
  const url = `https://hn.algolia.com/api/v1/search_by_date?query=${filter}&page=0`;
  const response = await axios.get<any>(url);
  return response.data;
};

interface Data {
  id: number;
  created_at: string;
  author: string;
  story_title: string;
  story_url: string;
}

function App() {
  const [data, setData] = useState<Array<Data>>([]);
  const [filter, setFilter] = useState<string>("");
  const [value, setValue] = useState<string>("All");
  const [likedItems, setLikedItems] = useState<Array<Data>>([]);
  // const [page, setPage] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const data = await getData(filter);
      setData(data.hits);
      localStorage.setItem("likedItems", JSON.stringify(likedItems));
      localStorage.setItem("filter", JSON.stringify(filter));
    })();
  }, [likedItems, filter]);

  useEffect(() => {
    const items = localStorage.getItem("likedItems");
    if (items) {
      const data = JSON.parse(items);
      setLikedItems(data);
    }
    const filters = localStorage.getItem("filter");
    if (filters) {
      const filter = JSON.parse(filters);
      setFilter(filter);
    }
  }, []);

  return value === "All" ? (
    <Container>
      <Header />
      <SubContainer>
        <News setValue={setValue} />
        <Filter setFilter={setFilter} />
        <CardsContainer>
          {data &&
            data.map((item, index) => (
              <Card
                key={index}
                item={item}
                likedItems={likedItems}
                setLikedItems={setLikedItems}
              />
            ))}
        </CardsContainer>
      </SubContainer>
      <PaginationContainer>
        <Pagination count={10} />
      </PaginationContainer>
    </Container>
  ) : (
    <Container>
      <Header />
      <SubContainer>
        <News setValue={setValue} />
        <Filter setFilter={setFilter} />
        <CardsContainer>
          {likedItems &&
            likedItems.map((item, index) => (
              <Card
                key={index}
                item={item}
                likedItems={likedItems}
                setLikedItems={setLikedItems}
              />
            ))}
        </CardsContainer>
      </SubContainer>
      <PaginationContainer>
        <Pagination count={10} />
      </PaginationContainer>
    </Container>
  );
}

export default App;
