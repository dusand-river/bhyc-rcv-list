import React, { useState } from "react";
import { Thead, Tr, Th, Icon } from "@chakra-ui/react";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { ITableColumn, TSortOrder } from "../config/interface";
import { setSortIcon } from "../service/tableFunctions";

interface ITableHeadProps {
  columns: ITableColumn[];
  handleSorting: (sortField: string, sortOrder: TSortOrder) => void;
}

const TableHead: React.FC<ITableHeadProps> = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (column: ITableColumn) => {
    if (column.sortable) {
      //console.log("Pressed", column);
      setSortField(column.key);
      const sortOrder = column.key === column.key && order === "asc" ? "desc" : "asc";
      setOrder(sortOrder);
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
                {setSortIcon(column, sortField, order) === "up" ? (
                  <Icon as={MdArrowUpward} />
                ) : setSortIcon(column, sortField, order) === "down" ? (
                  <Icon as={MdArrowDownward} />
                ) : (
                  ""
                )}
                {/* // {sortField === column.key && order === "asc" ? (
                //   <Icon as={MdArrowUpward} />
                // ) : sortField === column.key && order === "desc" ? (
                //   <Icon as={MdArrowDownward} />
                // ) : (
                //   ""
                // )} */}
              </Th>
            );
          })}
      </Tr>
    </Thead>
  );
};

export default TableHead;
