"use client";

import Navbar from "../../components/layout/Navbar";
import { useFinance } from "../../context/FinanceContext";

export default function TransactionsPage() {
  const { transactions, deleteTransaction } = useFinance();

  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + Number(item.amount), 0);

  const totalExpenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + Number(item.amount), 0);

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

          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="border-b border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-800">
                All Transactions
              </h2>
            </div>

            {transactions.length === 0 ? (
              <p className="p-8 text-center text-slate-500">
                No transactions available yet.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                    <tr>
                      <th className="p-4">Description</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Type</th>
                      <th className="p-4">Amount</th>
                      <th className="p-4">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {transactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="border-t border-slate-100"
                      >
                        <td className="p-4 font-medium text-slate-700">
                          {transaction.name}
                        </td>
                        <td className="p-4 text-slate-500">
                          {transaction.date}
                        </td>
                        <td className="p-4">
                          <span
                            className={
                              transaction.type === "income"
                                ? "rounded-full bg-green-100 px-3 py-1 text-green-700"
                                : "rounded-full bg-red-100 px-3 py-1 text-red-700"
                            }
                          >
                            {transaction.type}
                          </span>
                        </td>
                        <td className="p-4 font-semibold text-slate-700">
                          ₹{Number(transaction.amount).toLocaleString("en-IN")}
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => deleteTransaction(transaction.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </main>
    </>
  );
}