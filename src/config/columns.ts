import { ITableColumn } from "../common/SortableTable/config/interface";

const displayColumns: ITableColumn[] = [
  { key: "name", label: "Helm Name", sortable: true, active: true },
  { key: "boat", label: "Boat Name", sortable: true, active: true },
  { key: "class", label: "Class", sortable: true, active: true },
  { key: "sailNo", label: "Sail number", sortable: true, active: true },
  { key: "rating", label: "Rating", sortable: false, active: false },
  { key: "fleet", label: "Fleet", sortable: true, active: false },
  {
    key: "needPhrfCertificate",
    label: "Need PHRF",
    sortable: false,
    active: false,
  },
];

// [
//     "Event",
//     "Date",
//     "Name",
//     "Task",
//     "Crew Count",
//     "Boat",
//     "Email ",
//     "Mobile",
//     "Series",
//     "Event Date",
//     "Skipper Program",
//     "id",
//     "Timestamp"
// ]
