import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //salvam  in instanta  expenseDate (in date ce obtinem prin props de la app.js dar doar ce e relationat cu date de acea avem .date)

  //cu Card utilizam compoentu card care practic adauga  css  la acest component (face ce avem la return in card adica adauga clasa card care are proprietati de css si afecteaza tot ce se afla in instanta card datorita pla props.chiold)
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
  //si aici  cu parametru props av em acces la ce avem salavat in expensive in app.js
}

export default ExpenseItem;
