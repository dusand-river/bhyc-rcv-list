import React from "react";
import { Tbody, Tr, Td } from "@chakra-ui/react";
import { ITableColumn } from "../config/interface";
//import IEntry from "../mockData/tableInterface";
import { TTable } from "../hooks/useSortableTable";

interface ITableBodyProps {
  columns: ITableColumn[];
  // data: IEntry[];
  data: TTable;
}

const TableBody: React.FC<ITableBodyProps> = ({
  columns,
  data,
  //active,
}) => {
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
