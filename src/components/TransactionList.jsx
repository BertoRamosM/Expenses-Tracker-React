import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import  Transaction  from "./Transaction.jsx";


const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)



  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transactions={transaction} />
        ))}
      </ul>
    </>
  );
};
 
export default TransactionList;