"use client";

import { useFinance } from "../../context/FinanceContext";

export default function Alerts() {
  const { payments } = useFinance();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const alertsData = payments
    .filter((payment) => payment.status === "pending")
    .map((payment) => {
      const dueDate = new Date(`${payment.dueDate}T00:00:00`);
      const isOverdue = dueDate < today;
      const isDueToday = dueDate.getTime() === today.getTime();

      let status = "Upcoming";
      let color = "bg-blue-100 text-blue-700";
      let dot = "bg-blue-500";

      if (isOverdue) {
        status = "Overdue";
        color = "bg-red-100 text-red-700";
        dot = "bg-red-500";
      } else if (isDueToday) {
        status = "Due Today";
        color = "bg-amber-100 text-amber-700";
        dot = "bg-amber-500";
      }

      return {
        ...payment,
        statusLabel: status,
        color,
        dot,
      };
    })
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  return (
    <section className="mt-8 rounded-2xl border border-[#e8edf5] bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Payment Alerts
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Keep track of payments that need your attention.
        </p>
      </div>

      <div className="space-y-4">
        {alertsData.length === 0 ? (
          <p className="rounded-xl bg-slate-50 p-5 text-center text-sm text-slate-500">
            No pending payment alerts.
          </p>
        ) : (
          alertsData.map((alert) => (
            <div
              key={alert.id}
              className="flex flex-col justify-between gap-3 rounded-xl border border-slate-100 p-4 sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${alert.dot}`} />

                <div>
                  <h3 className="font-medium text-slate-800">
                    {alert.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Due date:{" "}
                    {new Date(`${alert.dueDate}T00:00:00`).toLocaleDateString(
                      "en-IN",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <p className="font-semibold text-slate-800">
                  ₹{Number(alert.amount).toLocaleString("en-IN")}
                </p>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${alert.color}`}
                >
                  {alert.statusLabel}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}