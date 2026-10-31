
"use client";

import { useFinance } from "../../context/FinanceContext";
import Navbar from "../../components/layout/Navbar";

export default function PaymentsPage() {
  const {
    payments,
    addPayment,
    updatePaymentStatus,
    deletePayment,
  } = useFinance();

  function handleAddPayment() {
    const newPayment = {
      name: "New Business Payment",
      amount: 5000,
      dueDate: "2026-11-10",
      status: "pending",
    };

    addPayment(newPayment);
  }

  const totalPending = payments
    .filter((payment) => payment.status === "pending")
    .reduce((sum, payment) => sum + Number(payment.amount), 0);

  const totalPaid = payments
    .filter((payment) => payment.status === "paid")
    .reduce((sum, payment) => sum + Number(payment.amount), 0);

  const today = new Date().toISOString().split("T")[0];

  const totalOverdue = payments
    .filter(
      (payment) =>
        payment.status === "pending" && payment.dueDate < today
    )
    .reduce((sum, payment) => sum + Number(payment.amount), 0);

  const formatAmount = (amount) =>
    `₹${Number(amount).toLocaleString("en-IN")}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f6f8fc] px-6 py-8">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Payments
              </h1>
              <p className="mt-2 text-slate-500">
                Manage your business payments.
              </p>
            </div>

            <button
              onClick={handleAddPayment}
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
            >
              + Add Sample Payment
            </button>
          </div>

          {/* Payment Summary */}
          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500">Pending Payments</p>
              <h2 className="mt-3 text-2xl font-bold text-amber-600">
                {formatAmount(totalPending)}
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500">Paid Payments</p>
              <h2 className="mt-3 text-2xl font-bold text-green-600">
                {formatAmount(totalPaid)}
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500">Overdue Payments</p>
              <h2 className="mt-3 text-2xl font-bold text-red-500">
                {formatAmount(totalOverdue)}
              </h2>
            </div>
          </div>

          {/* Payments Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="mb-5 text-xl font-semibold text-slate-800">
              Payment Details
            </h2>

            {payments.length === 0 ? (
              <p className="py-10 text-center text-slate-500">
                No payments available. Add a sample payment to get started.
              </p>
            ) : (
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-sm text-slate-500">
                    <th className="pb-4">Payment Name</th>
                    <th className="pb-4">Amount</th>
                    <th className="pb-4">Due Date</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {payments.map((payment) => {
                    const isOverdue =
                      payment.status === "pending" &&
                      payment.dueDate < today;

                    return (
                      <tr
                        key={payment.id}
                        className="border-b border-slate-100 text-sm"
                      >
                        <td className="py-4 font-medium text-slate-700">
                          {payment.name}
                        </td>

                        <td className="py-4 text-slate-600">
                          {formatAmount(payment.amount)}
                        </td>

                        <td className="py-4 text-slate-600">
                          {payment.dueDate}
                        </td>

                        <td className="py-4">
                          <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                            payment.status === "paid"
                              ? "bg-green-100 text-green-700"
                              : isOverdue
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-700"
                          }`}>
                            {payment.status === "paid"
                              ? "Paid"
                              : isOverdue
                              ? "Overdue"
                              : "Pending"}
                          </span>
                        </td>

                        <td className="py-4">
                          <div className="flex gap-3">
                            {payment.status === "pending" && (
                              <button
                                onClick={() =>
                                  updatePaymentStatus(payment.id, "paid")
                                }
                                className="font-medium text-green-600 hover:underline"
                              >
                                Mark Paid
                              </button>
                            )}

                            <button
                              onClick={() => deletePayment(payment.id)}
                              className="font-medium text-red-500 hover:underline"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

        </div>
      </main>
    </>
  );
}
