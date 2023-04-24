import { ITableColumn } from "./interface";

const tableColumns: ITableColumn[] = [
  { key: "event", label: "Event", sortable: true, active: true },
  { key: "date", label: "Date", sortable: false, active: true },
  { key: "name", label: "Name", sortable: true, active: true },
  { key: "task", label: "Task", sortable: true, active: true },
  { key: "crewCount", label: "Crew count", sortable: false, active: true },
  { key: "boat", label: "Boat", sortable: true, active: true },
  { key: "email", label: "Email", sortable: false, active: true },
  { key: "mobile", label: "Mobile", sortable: false, active: true },
  { key: "series", label: "Series", sortable: true, active: false },
  {
    key: "eventDate",
    label: "Event date",
    sortable: true,
    active: true,
    sortByOrder: "asc",
  },
];

export default tableColumns;
