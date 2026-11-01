
import Badge from "../ui/Badge";

export default function TransactionTable({ transactions = [] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Recent Transactions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-sm text-gray-500">
              <th className="py-3 px-3">Transaction</th>
              <th className="py-3 px-3">Category</th>
              <th className="py-3 px-3">Date</th>
              <th className="py-3 px-3">Amount</th>
              <th className="py-3 px-3">Type</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item) => (
              <tr key={item.id} className="border-b text-sm">
                <td className="py-4 px-3 font-medium text-gray-800">
                  {item.name}
                </td>

                <td className="py-4 px-3 text-gray-600">
                  {item.category}
                </td>

                <td className="py-4 px-3 text-gray-600">
                  {item.date}
                </td>

                <td className="py-4 px-3 font-semibold text-gray-800">
                  ₹{item.amount}
                </td>

                <td className="py-4 px-3">
                  <Badge status={item.type} />
                </td>
              </tr>
            ))}

            {transactions.length === 0 && (
              <tr>
                <td colSpan="5" className="py-6 text-center text-gray-500">
                  No transactions available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
