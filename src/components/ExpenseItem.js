import "./ExpenseItem.css";
function ExpenseItems() {
  return (
    <div className="expense-item">
      <div>9th august 2023</div>
      <div className="expense-item__description">
        <h2>car insurance</h2>
        <div className="expense-item__price">$294</div>
      </div>
    </div>
  );
}
export default ExpenseItems;
