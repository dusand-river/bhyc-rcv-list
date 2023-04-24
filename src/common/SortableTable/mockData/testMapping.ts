import { TTable } from "../hooks/useSortableTable";
import {
  getHeaderObject,
  getMatrixObject,
  matrixToTable,
} from "../service/matrix";
import { getActiveTableColumns } from "../service/tableFunctions";
import { ITableColumn } from "./../config/interface";

const columnsToHeader = (columns: ITableColumn) => {};

export const testMatrix = (header: string[], rows: any[]) => {
  // Function to test matrix conversion/mapping...
  const activeCols = getActiveTableColumns(true);
  const rowObj = matrixToTable(header, rows);

  console.log(testMapping(activeCols, rowObj));
};

export const testMapping = (columns: ITableColumn[], data: TTable) => {
  const aaa = data.map((data, rowIdx) => {
    const newRow = columns.map((column: ITableColumn) => {
      return data[column.key];
    });
    return newRow;
  });
  return aaa;
};
