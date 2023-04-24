import React from "react";

import { Text } from "@chakra-ui/react";

import { matrixToTable } from "../common/SortableTable/service/matrix";
import { getDisplayColumns } from "../common/SortableTable/service/tableFunctions";
import TableComp from "../common/SortableTable/components/TableComp";

interface IDataListProps {
  columns: string[];
  rows: string[][];
  error: string;
  isLoading: boolean;
}
const DataList: React.FC<IDataListProps> = ({
  columns,
  rows,
  error,
  isLoading,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Text>{error ? error : ""}</Text>
      {/* <SheetTable columns={columns} rows={rows} /> */}
      <TableComp
        columns={getDisplayColumns()}
        data={matrixToTable(columns, rows)}
      />
    </>
  );
};

export default DataList;
