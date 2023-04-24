import { TTableRow } from "../hooks/useSortableTable";
import { ITableColumn } from "./interface";

const tableColumns: ITableColumn[] = [
  { key: "id", label: "id", sortable: false, active: false },
  { key: "fullName", label: "Name", sortable: true, active: true },
  {
    key: "gender",
    label: "Gender",
    sortable: true,
    active: true,
    sortByOrder: "asc",
  },
  { key: "language", label: "Language", sortable: true, active: true },
  { key: "email", label: "Email", sortable: true, active: true },
  { key: "phone", label: "Mobile", sortable: true, active: true },
  {
    key: "firstName",
    label: "First name",
    sortable: false,
    active: false,
  },
  {
    key: "lastName",
    label: "Last name",
    sortable: false,
    active: false,
  },
];

export default tableColumns;
