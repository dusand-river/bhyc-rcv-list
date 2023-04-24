import { ITableColumn } from "../config/interface";
import tableColumns from "../config/tableColumns";
import { TTableRow } from "../hooks/useSortableTable";

export const getActiveTableColumns = (active: boolean): ITableColumn[] => {
  const cols = tableColumns.filter((column, index) => {
    if (active === true) return true;
    return column.active;
  });
  return cols;
};

export const getDisplayColumns = (): ITableColumn[] => {
  return tableColumns;
};

export function convertTable<T>(table: T[]) {
  return table.map((row) => {
    return row as TTableRow;
  });
}

export const setSortIcon = (
  column: ITableColumn,
  sortField: string,
  sortOrder: string
) => {
  let answer = "";
  if (sortField) {
    answer = sortOrder
      ? sortField === column.key && sortOrder === "asc"
        ? "up"
        : sortField === column.key && sortOrder === "desc"
        ? "down"
        : "default"
      : "";
  } else {
    if (column.sortByOrder) {
      answer =
        column.sortByOrder === "asc"
          ? "up"
          : column.sortByOrder === "desc"
          ? "down"
          : "";
    }
  }
  return answer;
};
