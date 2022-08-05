import styled from "styled-components";

const Container = styled.div`
  text-align: -webkit-center;
`;

const ButtonContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const SecondLabel = styled.label`
  font-size: 26px;
  color: #424242;
  font-weight: 500;
`;

const FirstLabel = styled.label`
  font-size: 26px;
  color: #424242;
  font-weight: 500;
  display: inline-block;
  margin: 0px;
  position: relative;

  > ${SecondLabel} {
    margin: 0px;
    width: 200px;
    height: 50px;
    background: #e0e0e0;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    display: block;
  }

  > ${SecondLabel}:before {
    content: "Favs";
    position: absolute;
    font-size: 26px;
    font-weight: 500;
    top: 7px;
    right: 30px;
  }

  > ${SecondLabel}:after {
    content: "All";
    width: 90px;
    height: 35px;
    background: #fff;
    position: absolute;
    left: 2px;
    top: 2px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 6px -2px #111;
    padding: 5px 0px;
    border-radius: 2px;
    border: solid 1px #1797ff;
  }
`;

const Input = styled.input`
  cursor: pointer;
  width: 200px;
  height: 50px;
  opacity: 0;
  position: absolute;
  right: 5px;
  z-index: 1;
  margin: 0px;

  &:checked + ${SecondLabel} {
    color: #606060;
  }
  &:checked + ${SecondLabel}:after {
    content: "Favs";
    color: #606060;
    border-radius: 2px;
    border: solid 1px #1797ff;
    left: 107px;
  }

  &:checked + ${SecondLabel}:before {
    content: "All";
    right: auto;
    left: 20px;
  }
`;

interface NewsProps {
  setValue: (value: string) => void;
}

const News = ({ setValue }: NewsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.checked ? setValue("Favs") : setValue("All");

  return (
    <Container>
      <ButtonContainer>
        <FirstLabel>
          <Input type="checkbox" onChange={handleChange} />
          <SecondLabel />
        </FirstLabel>
      </ButtonContainer>
    </Container>
  );
};

export default News;
