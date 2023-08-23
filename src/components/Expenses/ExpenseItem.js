import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItems(props) {
  // const expenseDate = new Date(2023, 8, 10);
  // const expenseTitle="car insurance";
  // const expenseAmount="$294";

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2>i am epcockci</h2>
      <div className="expense-item__description">
        <h2>{props.Title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItems;
