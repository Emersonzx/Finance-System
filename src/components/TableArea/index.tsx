import { Item } from "../../types/item";
import * as C from "./styles";
import { TableItem } from "../TableItem";

type Props = {
  list: Item[];
};
export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.tableHeadColumn width={100}>Data</C.tableHeadColumn>
          <C.tableHeadColumn width={130}>Categoria</C.tableHeadColumn>
          <C.tableHeadColumn>Título</C.tableHeadColumn>
          <C.tableHeadColumn width={150}>Valor</C.tableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item}></TableItem>
        ))}
      </tbody>
    </C.Table>
  );
};
