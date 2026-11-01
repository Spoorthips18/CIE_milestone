
export default function Badge({ status }) {
  const styles = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Overdue: "bg-red-100 text-red-700",
    Income: "bg-blue-100 text-blue-700",
    Expense: "bg-orange-100 text-orange-700",
  };

  const badgeStyle =
    styles[status] || "bg-gray-100 text-gray-700";

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeStyle}`}
    >
      {status}
    </span>
  );
}

