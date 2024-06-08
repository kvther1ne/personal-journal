import "./App.css";
import Button from "./components/Button/Button";
import CardButton from "./components/CardButton/CardButton";
import JournalItem from "./components/JournalItem/JournalItem";

export default function App() {
  const data = [
    {
      title: "Подготовка к обновлению курсов",
      text: "Тестовый кусок",
      date: new Date(),
    },
    {
      title: "Поход в горы",
      text: "Тестовый кусок второй",
      date: new Date(),
    },
  ];

  return (
    <>
      <Button />
      <CardButton>Новое воспоминание</CardButton>
      <CardButton>
        <JournalItem
          title={data[0].title}
          text={data[0].text}
          date={data[0].date}
        />
      </CardButton>
      <JournalItem
        title={data[1].title}
        text={data[1].text}
        date={data[1].date}
      />
    </>
  );
}
