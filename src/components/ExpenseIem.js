import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = new Date(2020, 11, 25);
  const expenseTitle = "Car insurance";
  const expenseAmount = 284.67;
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">{props.title}</div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
  //si aici  cu parametru props av em acces la ce avem salavat in expensive in app.js
}

export default ExpenseItem;
