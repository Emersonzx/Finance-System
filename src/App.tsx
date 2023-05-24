import * as C from "./App.styles";
import { Item } from "./types/item";
import { categories } from "./data/categories";
import { useEffect, useState } from "react";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";



const App = () => {
  
  const [list, setList] = useState<Item[]>(() => {
    const storedList = localStorage.getItem('list');
    if (storedList) {
      const parsedList = JSON.parse(storedList, (key, value) => {
        if (key === 'date') {
          return new Date(value);
        }
        return value;
      });
      return parsedList;
    }
    return [];
  });
  
  
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    const storedList = localStorage.getItem('list');
if (storedList) {
  const parsedList = JSON.parse(storedList);
  const updatedList = parsedList.map((item: Item) => ({
    ...item,
    date: new Date(item.date) 
  }));
  setList(updatedList);
}

  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));

    let expenseCount = 0;
    let incomeCount = 0;
    for (let i in list) {
      if (categories[list[i].category].expense) {
        expenseCount += list[i].value;
      } else {
        incomeCount += list[i].value;
      }
    }
    setExpense(expenseCount);
    setIncome(incomeCount);
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    setList([...list, item]);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro </C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
