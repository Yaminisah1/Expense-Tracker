import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(item => item.amount);
  const income = amounts.filter(a => a > 0).reduce((acc, a) => acc + a, 0).toFixed(2);
  const expense = (amounts.filter(a => a < 0).reduce((acc, a) => acc + a, 0) * -1).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+₹{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-₹{expense}</p>
      </div>
    </div>
  );
};
