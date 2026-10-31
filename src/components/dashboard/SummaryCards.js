
"use client";

import { useFinance } from "../../context/FinanceContext";

export default function SummaryCards() {
  const {
    totalIncome,
    totalExpenses,
    currentBalance,
    pendingPayments,
  } = useFinance();

  const summaryData = [
    {
      title: "Total Income",
      amount: totalIncome,
      description: "Income received",
      color: "text-green-600",
      icon: "↑",
    },
    {
      title: "Total Expenses",
      amount: totalExpenses,
      description: "Business expenses",
      color: "text-red-500",
      icon: "↓",
    },
    {
      title: "Current Balance",
      amount: currentBalance,
      description: "Available balance",
      color: "text-blue-600",
      icon: "₹",
    },
    {
      title: "Pending Payments",
      amount: pendingPayments,
      description: "Awaiting collection",
      color: "text-amber-600",
      icon: "◷",
    },
  ];

  const formatAmount = (amount) =>
    `₹${Number(amount).toLocaleString("en-IN")}`;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {summaryData.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-[#e8edf5] bg-white p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">{item.title}</p>
            <span className={`text-xl font-bold ${item.color}`}>
              {item.icon}
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-bold text-slate-800">
            {formatAmount(item.amount)}
          </h2>

          <p className={`mt-2 text-sm ${item.color}`}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
