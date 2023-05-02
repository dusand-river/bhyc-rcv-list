import { useEffect, useState } from "react";
import { IFilter } from "../interface/filter";
import { filterByDate, filterRows, setNewFilter } from "../service/filterData";
import { CurrentDateFilter } from "../config/filters";

interface IuseFilterProps {
  rows: string[][];
  headers: string[];
}

const useFilter = ({ rows, headers }: IuseFilterProps) => {
  const [filteredRows, setFilteredRows] = useState<string[][]>([]);
  const [filters, setFilters] = useState<IFilter[]>([]);

  useEffect(() => {
    setFilteredRows([...rows]);
  }, [rows]);

  const handleFilterChange = (filter: IFilter, column: string) => {
    // update state
    let updatedFilter: IFilter[] = [];
    const objIdx = filters.findIndex((element) => element.columnKey === column);

    updatedFilter = setNewFilter(filter, filters, objIdx);

    setFilters(updatedFilter);
    // filter data
    setFilteredData(updatedFilter, rows);
  };

  const setFilteredData = (filters: IFilter[], rows: string[][]) => {
    let newRows: string[][] = [...rows];
    let colIdx = 0;
    filters.forEach((filter) => {
      if (filter.columnKey === CurrentDateFilter.dateColumn) {
        newRows = filterByDate({
          filter: filter,
          rows: newRows,
          columnIndex: headers.indexOf(filter.columnKey),
        });
      } else {
        let colIdx = filter.columnKey === "Task" ? -1 : headers.indexOf(filter.columnKey);
        newRows = filterRows(filter, newRows, colIdx);
      }
    });

    setFilteredRows([...newRows]);
  };

  return { filteredRows, handleFilterChange };
};

export default useFilter;
