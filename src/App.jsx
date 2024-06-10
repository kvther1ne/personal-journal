/* eslint-disable react/jsx-key */
import "./App.css";

import JournalList from "./components/JournalList/JournalList";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalForm from "./components/JournalForm/JournalForm";
import { useState } from "react";

const INITIAL_DATA = [
  // {
  //   id: 1,
  //   title: "Подготовка к обновлению курсов",
  //   text: "Тестовый кусок",
  //   date: new Date(),
  // },
  // {
  //   id: 2,
  //   title: "Поход в горы",
  //   text: "Тестовый кусок второй",
  //   date: new Date(),
  // },
];

export default function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items}></JournalList>
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}
