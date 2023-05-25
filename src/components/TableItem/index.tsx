import * as C from "./styles";
import { Item } from "../../types/item";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

type Props = {
  item: Item;
  onRemove: (item: Item) => void;
};

export const TableItem = ({ item, onRemove }: Props) => {
  const handleRemoveItem = () => {
    onRemove(item);
  };

  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? "red" : "blue"}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
      <C.TableColumn>
        <C.RemoveButton onClick={handleRemoveItem}>Remover</C.RemoveButton>
      </C.TableColumn>
    </C.TableLine>
    
  );
};