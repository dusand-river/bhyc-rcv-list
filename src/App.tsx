import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import Header from "./components/Header";
import FilterButtons from "./components/FilterButtons";
import DataList from "./components/DataList";
import useSheets from "./hooks/useSheet";
import useFilter from "./hooks/useFilter";
import { getEvents } from "./service/filterData";

interface IActionContextInterface {
  isAction: boolean;
  setIsAction: Dispatch<SetStateAction<boolean>>;
}
export const ActionContext = createContext<IActionContextInterface>({
  isAction: false,
  setIsAction: () => false,
});

function App() {
  const { headers, rows, error, isLoading } = useSheets();
  const { filteredRows, handleFilterChange, filterChanged } = useFilter({
    rows,
    headers,
  });

  return (
    <Grid
      templateAreas={`"header" "filter" "main"`}
      gap="1"
      color="blackAlpha.700"
    >
      <GridItem pl="2" bg="gray.200" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg="blue.100" area={"filter"}>
        <FilterButtons
          onFilterChange={handleFilterChange}
          events={getEvents({ columns: headers, rows: filteredRows })}
        />
      </GridItem>
      <GridItem pl="2" bg="blue.50" area={"main"}>
        <DataList
          columns={headers}
          rows={filteredRows}
          error={error}
          isLoading={isLoading}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
