import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2020, 11, 25);
  const expenseTitle = "Car insurance";
  const expenseAmount = 284.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">{expenseTitle}</div>
      <div className="expense-item__price">{expenseAmount}</div>
    </div>
  );
}

export default ExpenseItem;
