
const summaryData = [
  {
    title: "Total Income",
    amount: "₹1,50,000",
    description: "Income received",
    color: "text-green-600",
    icon: "↑",
  },
  {
    title: "Total Expenses",
    amount: "₹65,000",
    description: "Business expenses",
    color: "text-red-500",
    icon: "↓",
  },
  {
    title: "Current Balance",
    amount: "₹85,000",
    description: "Available balance",
    color: "text-blue-600",
    icon: "₹",
  },
  {
    title: "Pending Payments",
    amount: "₹25,000",
    description: "Awaiting collection",
    color: "text-amber-600",
    icon: "◷",
  },
];

export default function SummaryCards() {
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
            {item.amount}
          </h2>

          <p className={`mt-2 text-sm ${item.color}`}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

