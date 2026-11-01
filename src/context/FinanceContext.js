
"use client";

import { createContext, useContext, useState } from "react";
import initialTransactions from "../data/transaction";
import initialPayments from "../data/payment";

const FinanceContext = createContext();

export function FinanceProvider({ children }) {
 const [transactions, setTransactions] = useState(initialTransactions);
const [payments, setPayments] = useState(initialPayments);

  // Add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions((previous) => [
      ...previous,
      { ...newTransaction, id: newTransaction.id || crypto.randomUUID() },
    ]);
  };

  // Edit an existing transaction
  const editTransaction = (id, updatedData) => {
    setTransactions((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      )
    );
  };

  // Delete a transaction
  const deleteTransaction = (id) => {
    setTransactions((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  // Add a new payment
  const addPayment = (newPayment) => {
    setPayments((previous) => [
      ...previous,
      { ...newPayment, id: newPayment.id || crypto.randomUUID() },
    ]);
  };

  // Update payment status
  const updatePaymentStatus = (id, newStatus) => {
    setPayments((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  // Delete a payment
  const deletePayment = (id) => {
    setPayments((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  // Calculate total income
  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + Number(item.amount || 0), 0);

  // Calculate total expenses
  const totalExpenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + Number(item.amount || 0), 0);

  // Calculate current balance
  const currentBalance = totalIncome - totalExpenses;

  // Calculate pending payments
  const pendingPayments = payments
    .filter((item) => item.status === "pending")
    .reduce((total, item) => total + Number(item.amount || 0), 0);

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        payments,
        addTransaction,
        editTransaction,
        deleteTransaction,
        addPayment,
        updatePaymentStatus,
        deletePayment,
        totalIncome,
        totalExpenses,
        currentBalance,
        pendingPayments,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

// Custom hook to access financial data
export function useFinance() {
  const context = useContext(FinanceContext);

  if (!context) {
    throw new Error("useFinance must be used inside FinanceProvider");
  }

  return context;
}
