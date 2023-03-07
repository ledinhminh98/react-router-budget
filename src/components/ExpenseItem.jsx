import { formatCurrency, formatDateToLocateString } from "../helpers";

const ExpenseItem = ({ expense }) => {
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocateString(expense.createAt)}</td>
    </>
  );
};

export default ExpenseItem;
