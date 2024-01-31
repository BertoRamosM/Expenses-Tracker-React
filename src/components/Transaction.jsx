/* eslint-disable react/prop-types */
import { useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";


const Transaction = ({ transactions }) => {

  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transactions.amount < 0 ? "-" : "+"

  return (
    <li className={transactions.amount < 0 ? "minus" : 'plus'} key={transactions.id}>
      {transactions.text}
      <span>{sign}${Math.abs(transactions.amount)}</span>
      <button className="delete-btn"
      onClick={()=>deleteTransaction(transactions.id)}>x</button>
    </li>
  );
};
 
export default Transaction;