import { ITableColumn } from "../config/interface";
import { Icon } from "@chakra-ui/react";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { setSortIcon } from "../service/tableFunctions";

interface ITableSortIconProps {
  column: ITableColumn;
  sortField: string;
  sortOrder: string;
}
const TableSortIcon: React.FC<ITableSortIconProps> = ({ column, sortField, sortOrder }) => {
  const iconName: string = setSortIcon(column, sortField, sortOrder);
  return iconName === "up" ? (
    <Icon as={MdArrowUpward} />
  ) : iconName === "down" ? (
    <Icon as={MdArrowDownward} />
  ) : null;
};

export default TableSortIcon;
