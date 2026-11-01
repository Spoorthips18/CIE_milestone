
"use client";

import { useFinance } from "../../context/FinanceContext";

export default function CashflowCards() {
  const { transactions } = useFinance();

  const currentYear = new Date().getFullYear();

  const monthlyData = Array.from({ length: 12 }, (_, index) => {
    const monthTransactions = transactions.filter((item) => {
      if (!item.date) return false;

      const date = new Date(`${item.date}T00:00:00`);

      return (
        date.getFullYear() === currentYear &&
        date.getMonth() === index
      );
    });

    const income = monthTransactions
      .filter((item) => item.type === "Income")
      .reduce((sum, item) => sum + Number(item.amount || 0), 0);

    const expenses = monthTransactions
      .filter((item) => item.type === "Expense")
      .reduce((sum, item) => sum + Number(item.amount || 0), 0);

    return {
      month: new Date(currentYear, index).toLocaleString("en-IN", {
        month: "short",
      }),
      income,
      expenses,
    };
  });

  const totalIncome = monthlyData.reduce(
    (sum, item) => sum + item.income,
    0
  );

  const totalExpenses = monthlyData.reduce(
    (sum, item) => sum + item.expenses,
    0
  );

  const netCashflow = totalIncome - totalExpenses;

  const maxValue = Math.max(
    1,
    ...monthlyData.map((item) =>
      Math.max(item.income, item.expenses)
    )
  );

  return (
    <section className="mt-8 rounded-2xl border border-[#e8edf5] bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Cash Flow Overview
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Monthly income and expenses overview for {currentYear}
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-green-50 p-4">
          <p className="text-sm text-green-700">Total Income</p>
          <p className="mt-2 text-xl font-bold text-green-800">
            ₹{totalIncome.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="rounded-xl bg-red-50 p-4">
          <p className="text-sm text-red-700">Total Expenses</p>
          <p className="mt-2 text-xl font-bold text-red-800">
            ₹{totalExpenses.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 p-4">
          <p className="text-sm text-blue-700">Net Cash Flow</p>
          <p className="mt-2 text-xl font-bold text-blue-800">
            ₹{netCashflow.toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      <div>
        <h3 className="mb-5 font-medium text-slate-700">
          Monthly Comparison
        </h3>

        <div className="space-y-5">
          {monthlyData.map((item) => (
            <div key={item.month}>
              <p className="mb-2 text-sm font-medium text-slate-600">
                {item.month}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-16 text-xs text-slate-500">
                    Income
                  </span>
                  <div className="h-3 flex-1 rounded-full bg-slate-100">
                    <div
                      className="h-3 rounded-full bg-green-500"
                      style={{
                        width: `${(item.income / maxValue) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-16 text-xs text-slate-500">
                    Expense
                  </span>
                  <div className="h-3 flex-1 rounded-full bg-slate-100">
                    <div
                      className="h-3 rounded-full bg-red-400"
                      style={{
                        width: `${(item.expenses / maxValue) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <span className="flex items-center gap-2 text-slate-600">
            <span className="h-3 w-3 rounded-full bg-green-500" />
            Income
          </span>
          <span className="flex items-center gap-2 text-slate-600">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            Expenses
          </span>
        </div>
      </div>
    </section>
  );
}
