import Alerts from "../../components/dashboard/Alerts";
import CashflowCards from "../../components/dashboard/CashflowCards";
import SummaryCards from "../../components/dashboard/SummaryCards";
import Navbar from "../../components/layout/Navbar";
export default function DashboardPage() {
  return (
    
    <main className="min-h-screen bg-[#f6f8fc] p-6">
      <div className="mx-auto max-w-7xl">
        <Navbar />

        {/* Dashboard Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Welcome back! Here's an overview of your business finances.
          </p>
        </div>

        {/* Summary Cards */}
        <SummaryCards />
        <CashflowCards />
        <Alerts />

        {/* Recent Transactions */}
        <section className="mt-8 rounded-2xl border border-[#e8edf5] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">
            Recent Transactions
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Your recent income and expense transactions will appear here.
          </p>
        </section>

      </div>
    </main>
  );
}
