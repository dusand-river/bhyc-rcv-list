import { useContext, useEffect, useState } from "react";
import { ITableColumn, TSortOrder, TSortRequest } from "../config/interface";
import { ActionContext } from "../../../App";

export type TTableRow = Record<string, any>;
export type TTable = Record<string, any>[];

function getDefaultSorting(defaultTableData: TTable, columns: ITableColumn[]) {
  const sorted = [...defaultTableData].sort((a, b) => {
    const filterColumn = columns.filter((column) => column.sortByOrder);

    // Merge all array objects into single object and extract accessor and sortByOrder keys
    let { key: key = "id", sortByOrder = "asc" } = Object.assign({}, ...filterColumn);

    if (a[key] === null) return 1;
    if (b[key] === null) return -1;
    if (a[key] === null && b[key] === null) return 0;
    if (a[key] === undefined) return 0;

    const ascending = a[key].toString().localeCompare(b[key].toString(), "en", {
      numeric: true,
    });

    return sortByOrder === "asc" ? ascending : -ascending;
  });
  return sorted;
}

interface UseSortableTableOutput {
  sortedTable: TTable;
  sort: (sortField: string, sortOrder: TSortOrder, data: TTable) => void;
  setSortRequest: (request: TSortRequest) => void;
}
function useSortableTable(columns: ITableColumn[], tableData: TTable): UseSortableTableOutput {
  const [sortedTable, setSortedTable] = useState<TTable>([]);
  const [sortRequest, setSortRqs] = useState<TSortRequest>();
  const { isAction, setIsAction } = useContext(ActionContext);
  useEffect(() => {
    /* NOTE:
     ** State initialization happens only on first execution... at thet time table is empty!
     ** That is why we need to initialize state here
     */
    if (tableData && tableData?.length > 0) {
      if (isAction === true) {
        // preserve existing sort order
        if (sortRequest) sort(sortRequest?.sortField, sortRequest?.sortOrder, tableData);
      } else {
        setSortedTable([]);
        setSortedTable(getDefaultSorting(tableData, columns));
      }
    }
  }, [tableData]);

  function sort(sortField: string, sortOrder: TSortOrder, data: TTable): void {
    if (sortField && data) {
      // const newSortedTable = [...sortedTable].sort((a, b) => {
      const newSortedTable = [...data].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setSortedTable(newSortedTable);
    }
  }
  function setSortRequest(request: TSortRequest): void {
    setSortRqs(request);
  }

  return { sortedTable, sort, setSortRequest };
}

export default useSortableTable;
