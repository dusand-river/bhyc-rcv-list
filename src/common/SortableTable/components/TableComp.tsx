import React, { useContext, useEffect } from "react";
import { Table, TableContainer } from "@chakra-ui/react";

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { ITableColumn } from "../config/interface";
import useSortableTable, { TTable } from "../hooks/useSortableTable";

interface ITableCompProps {
  columns: ITableColumn[];
  data: TTable;
}
const TableComp: React.FC<ITableCompProps> = ({ columns, data }) => {
  const {
    sortedTable: table,
    sort: handleSorting,
    setSortRequest: handleSortRequest,
  } = useSortableTable(columns, data);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableHead {...{ columns, handleSorting, handleSortRequest }} />
        <TableBody {...{ columns, data: table }} />
      </Table>
    </TableContainer>
  );
};

export default TableComp;
