import { toCamelCase } from "../../service/text";
import { IMatrixRow } from "../config/interface";
import { TTable } from "../hooks/useSortableTable";
import { convertTable } from "./tableFunctions";

type THeader = Record<string, any>;
type TgetHeaderObject = (header: string[]) => {};
type TGetMatrixObject = (headerObject: {}, dataRow: any[]) => THeader[];

export const getHeaderObject: TgetHeaderObject = (header: string[]) => {
  let idx = 0;
  return header.reduce((previous: { [x: string]: number }, current: string) => {
    let camelString = toCamelCase(current.replace(/[^a-zA-Z ]/g, ""));
    previous[camelString] = idx;
    idx += 1;
    return previous;
  }, {});
};

export const getMatrixObject: TGetMatrixObject = (
  headerObject: { [key: string]: string },
  dataRow: any[]
) => {
  return dataRow.map(function (row) {
    let rowObj: IMatrixRow = {};
    const objKeys = Object.keys(headerObject);
    const objValues = Object.values(headerObject);
    for (let value in objValues) {
      const newValue = row[headerObject[objKeys[value]]];
      const newKey = objKeys[value];
      rowObj[newKey] = newValue;
    }
    // console.log(rowObj);
    return rowObj;
  });
};

export const matrixToTable = (header: string[], matrix: any[]): TTable => {
  const objMatrix = getMatrixObject(getHeaderObject(header), matrix);
  return convertTable<IMatrixRow>(objMatrix);
};
