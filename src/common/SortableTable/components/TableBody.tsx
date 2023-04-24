import React from "react";
import { Tbody, Tr, Td } from "@chakra-ui/react";
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
                  <Td key={colIdx}>
                    {data[column.key]}
                    {/* {(data as any)[column.key] as unknown as any} */}
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
