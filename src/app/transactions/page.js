
"use client";

import Navbar from "../../components/layout/Navbar";
import TransactionForm from "../../components/forms/TransactionForm";
import TransactionTable from "../../components/dashboard/TransactionTable";
import { useFinance } from "../../context/FinanceContext";

export default function TransactionsPage() {
  const {
    transactions,
    addTransaction,
    deleteTransaction,
    totalIncome,
    totalExpenses,
  } = useFinance();

  const handleAddTransaction = (formData) => {
    addTransaction({
      ...formData,
      amount: Number(formData.amount),
      type: formData.type,
    });
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 p-6">
        <div className="mx-auto max-w-7xl">

          <h1 className="mb-2 text-3xl font-bold text-slate-800">
            Transactions
          </h1>

          <p className="mb-8 text-slate-500">
            Track and manage your business income and expenses.
          </p>

          <div className="mb-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Total Income</p>
              <h2 className="mt-2 text-2xl font-bold text-green-600">
                ₹{totalIncome.toLocaleString("en-IN")}
              </h2>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-500">Total Expenses</p>
              <h2 className="mt-2 text-2xl font-bold text-red-500">
                ₹{totalExpenses.toLocaleString("en-IN")}
              </h2>
            </div>
          </div>

          <div className="mb-8">
            <TransactionForm onAddTransaction={handleAddTransaction} />
      
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold text-slate-800">
              All Transactions
            </h2>

            <TransactionTable transactions={transactions} />

            {transactions.length > 0 && (
              <div className="mt-4 border-t pt-4">
                <p className="mb-3 font-medium text-slate-700">
                  Manage Transactions
                </p>

                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between border-b py-2"
                  >
                    <span>{transaction.name}</span>

                    <button
                      onClick={() => deleteTransaction(transaction.id)}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>
    </>
  );
}
