"use client";

import { useFinance } from "../../context/FinanceContext";
import Alerts from "../../components/dashboard/Alerts";
import CashflowCards from "../../components/dashboard/CashflowCards";
import SummaryCards from "../../components/dashboard/SummaryCards";
import Navbar from "../../components/layout/Navbar";

export default function DashboardPage() {
  const { transactions } = useFinance();

  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-[#f6f8fc] p-6">
      <div className="mx-auto max-w-7xl">
        <Navbar />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Welcome back! Here's an overview of your business finances.
          </p>
        </div>

        <SummaryCards />
        <CashflowCards />
        <Alerts />

        {/* Recent Transactions */}
        <section className="mt-8 rounded-2xl border border-[#e8edf5] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            Recent Transactions
          </h2>

          <p className="mb-5 mt-2 text-sm text-slate-500">
            Your latest income and expense transactions.
          </p>

          {recentTransactions.length === 0 ? (
            <p className="rounded-xl bg-slate-50 p-5 text-center text-sm text-slate-500">
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
                  </tr>
                </thead>

                <tbody>
                  {recentTransactions.map((transaction) => (
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}