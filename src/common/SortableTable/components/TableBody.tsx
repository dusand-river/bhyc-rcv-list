import React from "react";
import { Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import { ITableColumn } from "../config/interface";
import { TTable } from "../hooks/useSortableTable";

export interface ITableBodyProps {
  columns: ITableColumn[];
  data: TTable;
}

const TableBody: React.FC<ITableBodyProps> = ({ columns, data }) => {
  return (
    <Tbody>
      {data &&
        data.map((data, rowIdx) => {
          return (
            <Tr key={rowIdx}>
              {columns.map((column: ITableColumn, colIdx) => {
                return (
                  <Td key={colIdx} style={{ maxWidth: "300px", whiteSpace: "break-spaces" }}>
                    {data[column.key]}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
    </Tbody>
  );
};

export default TableBody;
