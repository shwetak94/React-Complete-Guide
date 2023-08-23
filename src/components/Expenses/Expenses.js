import ExpenseItems from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItems
        Title={props.items[0].Title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />

      <ExpenseItems
        Title={props.items[1].Title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
    </Card>
  );
}

export default Expenses;
