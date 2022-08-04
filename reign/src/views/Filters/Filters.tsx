import { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 240px;
  height: 32px;
  margin: 63px 114px 1px 150px;
  padding: 5px 12px 5px 12px;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  background-color: #fff;
`;

const Filter = () => {
  const [filter, setFilter] = useState<string>("");

  return (
    <Select>
      <option value="angular">Angular</option>
      <option value="reactjs">React</option>
      <option value="vuejs">VueJs</option>
    </Select>
  );
};

export default Filter;
