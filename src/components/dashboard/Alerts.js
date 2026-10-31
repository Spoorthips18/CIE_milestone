
const alertsData = [
  {
    id: 1,
    name: "ABC Suppliers",
    amount: 12000,
    dueDate: "25 Oct 2026",
    status: "Overdue",
    color: "bg-red-100 text-red-700",
    dot: "bg-red-500",
  },
  {
    id: 2,
    name: "Customer Payment",
    amount: 8000,
    dueDate: "Today",
    status: "Due Today",
    color: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500",
  },
  {
    id: 3,
    name: "Office Rent",
    amount: 15000,
    dueDate: "05 Nov 2026",
    status: "Upcoming",
    color: "bg-blue-100 text-blue-700",
    dot: "bg-blue-500",
  },
];

export default function Alerts() {
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
        {alertsData.map((alert) => (
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
                  Due date: {alert.dueDate}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <p className="font-semibold text-slate-800">
                ₹{alert.amount.toLocaleString("en-IN")}
              </p>

              <span className={`rounded-full px-3 py-1 text-xs font-medium ${alert.color}`}>
                {alert.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
