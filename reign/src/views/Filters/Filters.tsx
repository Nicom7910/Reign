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
  filter: string;
  setFilter: (filter: string) => void;
}

const Filter = ({ filter, setFilter }: FilterProps) => {
  const Options = () => {
    switch (filter) {
      case "angular":
        return (
          <>
            <option value="angular" defaultChecked>
              {filter[0].toUpperCase() + filter.slice(1)}
            </option>
            <option value="">Select your News</option>
            <option value="reactjs">React</option>
            <option value="vuejs">VueJs</option>
          </>
        );
      case "reactjs":
        return (
          <>
            <option value="reactjs" defaultChecked>
              {filter[0].toUpperCase() + filter.slice(1)}
            </option>
            <option value="">Select your News</option>

            <option value="angular">Angular</option>
            <option value="vuejs">VueJs</option>
          </>
        );
      case "vuejs":
        return (
          <>
            <option value="vuejs" defaultChecked>
              {filter[0].toUpperCase() + filter.slice(1)}
            </option>
            <option value="">Select your News</option>

            <option value="reactjs">React</option>
            <option value="angular">Angular</option>
          </>
        );

      default:
        return (
          <>
            <option value="" defaultChecked>
              Select your News
            </option>
            <option value="angular">Angular</option>
            <option value="reactjs">React</option>
            <option value="vuejs">VueJs</option>
          </>
        );
    }
  };

  return (
    <Select onChange={(e) => setFilter(e.target.value)}>
      <Options />
    </Select>
  );
};

export default Filter;
