import styled from "styled-components";

const Select = styled.select`
  width: 240px;
  height: 32px;
  padding: 5px 12px 5px 12px;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  background-color: #fff;
  margin-top: 20px;

  @media (min-width: 960px) {
    width: 240px;
    padding: 5px 12px 5px 12px;
    margin-left: 100px;
  }
`;

interface FilterProps {
  setFilter: (filter: string) => void;
}

const Filter = ({ setFilter }: FilterProps) => (
  <Select onChange={(e) => setFilter(e.target.value)}>
    <option value="" defaultChecked>
      Select your News
    </option>
    <option value="angular">Angular</option>
    <option value="reactjs">React</option>
    <option value="vuejs">VueJs</option>
  </Select>
);

export default Filter;
