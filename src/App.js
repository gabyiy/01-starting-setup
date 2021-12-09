import Expenses from "./components/Expenses/Expenses";

const App = () => {
  //aici am facuto o functie arrow

  //am creat un array de obiectge pe care o sa le transferam in clasele instantiate expenseItem
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const prob = [
    { fName: "Gabi", Lname: "Nita" },
    { fName: "Mihai", Lname: "Alex" },
  ];
  return (
    <div>
      <h2>Let's get started! x</h2>

      <Expenses expenses={expenses}></Expenses>
    </div>
  );
  //in expense item am trecut ca parametri ce avem la pozitia respectiva a arraiului express,dupa aceasta trebuioe se trecem ca props in expenseItem
};

export default App;
