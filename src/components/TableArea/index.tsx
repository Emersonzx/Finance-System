import { Item } from "../../types/item";
import * as C from "./styles";
import { TableItem } from "../TableItem";

type Props = {
  list: Item[];
  onRemove: (item: Item) => void;  // Update the prop name to 'onRemove'
};

export const TableArea = ({ list, onRemove }: Props) => {
  const handleRemoveItem = (item: Item) => {
    const updatedList = list.filter((listItem) => listItem !== item);
    onRemove(item);  // Call the 'onRemove' prop with the removed item
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

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
          <TableItem
            key={index}
            item={item}
            onRemove={handleRemoveItem}
          ></TableItem>
        ))}
      </tbody>
    </C.Table>
  );
};
