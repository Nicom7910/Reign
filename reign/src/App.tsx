import Card from "./views/Cards/Card";
import Header from "./views/Header/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Filter from "./views/Filters/Filters";

const Container = styled.div`
  padding: 150px;
`;

const SubContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  padding-top: 20px;
`;

const getData = async () => {
  const url =
    "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0";
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

  useEffect(() => {
    (async () => {
      const data = await getData();
      setData(data.hits);
    })();
  }, []);

  return (
    <div className="App">
      <Header />
      <Container>
        <Filter />
        <SubContainer>
          {data && data.map((item, index) => <Card key={index} item={item} />)}
        </SubContainer>
      </Container>
    </div>
  );
}

export default App;
