export interface ITableColumn {
  key: string;
  label: string;
  active: boolean;
  sortable: boolean;
  sortByOrder?: TSortOrder;
}

export type TSortOrder = "asc" | "desc";

export interface IMatrixRow {
  event?: string;
  date?: string;
  name?: string;
  task?: string;
  crewCount?: string;
  boat?: string;
  email?: string;
  mobile?: string;
  eventDate?: string;
  series?: string;
  id?: string;
  skipperProgram?: string;
  timestamp?: Date;
  [key: string]: any;
}
