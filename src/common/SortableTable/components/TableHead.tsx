import React, { useState } from "react";
import { Thead, Tr, Th } from "@chakra-ui/react";
import { ITableColumn, TSortOrder, TSortRequest } from "../config/interface";
import TableSortIcon from "./TableSortIcon";

interface ITableHeadProps {
  columns: ITableColumn[];
  handleSorting: (sortField: string, sortOrder: TSortOrder) => void;
  handleSortRequest: (request: TSortRequest) => void;
}

const TableHead: React.FC<ITableHeadProps> = ({ columns, handleSorting, handleSortRequest }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (column: ITableColumn) => {
    if (column.sortable) {
      setSortField(column.key);
      const sortOrder = column.key === column.key && order === "asc" ? "desc" : "asc";
      setOrder(sortOrder);

      handleSortRequest({ sortField: column.key, sortOrder: sortOrder });

      handleSorting(column.key, sortOrder);
    } else {
      console.log("Not Sortable");
    }
  };

  return (
    <Thead>
      <Tr>
        {columns &&
          columns.map((column: ITableColumn) => {
            return (
              <Th
                style={{ textAlign: "left" }}
                key={column.key}
                onClick={() => handleSortingChange(column)}
              >
                {`${column.label}  `}
                <TableSortIcon column={column} sortField={sortField} sortOrder={order} />
              </Th>
            );
          })}
      </Tr>
    </Thead>
  );
};

export default TableHead;
