import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 5rem;
  padding: 4.5rem 0 0 5rem;
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
`;

const Title = styled.span`
  width: 3rem;
  object-fit: contain;
  font-family: Baskerville;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #3b3b3b;
`;

const Header = () => (
  <Container>
    <Title>HACKER NEWS</Title>
  </Container>
);

export default Header;
