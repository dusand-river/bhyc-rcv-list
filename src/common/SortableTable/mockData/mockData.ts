import { convertTable } from "../service/tableFunctions";
import mockData from "./MockData.json";
import IEntry from "./IEntry";

const getMockData = () => {
  const data = [...mockData].filter((row, idx) => {
    return idx < 10;
  });

  const mappedRows: IEntry[] = data.map((row) => {
    return {
      id: row.id,
      fullName: `${row.last_name}, ${row.first_name}`,
      gender: row.gender,
      language: row.Language,
      email: row.email,
      phone: row.Phone,
      firstName: row.first_name,
      lastName: row.last_name,
    };
  });

  // this converts any table, in this case IEntry to TTable used in Sortable Table components
  return convertTable<IEntry>(mappedRows);
};

export default getMockData;
