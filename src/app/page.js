
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-800">

      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-white border-b">
        <h1 className="text-2xl font-bold text-blue-600">
          CashFlow
        </h1>

        <div className="flex items-center gap-6">
          <Link href="/login" className="font-medium hover:text-blue-600">
            Login
          </Link>

          <Link
            href="/register"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 md:py-28 text-center">
        <p className="text-blue-600 font-semibold mb-4">
          SMART FINANCIAL MANAGEMENT
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Take Control of Your
          <span className="text-blue-600"> Cash Flow</span>
        </h2>

        <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-6">
          Manage your income, expenses and payments in one place.
          Make smarter financial decisions with our simple
          Cash Flow Management Dashboard.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="border border-gray-300 bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Manage Your Finances Easily
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-7 rounded-xl bg-blue-50 border border-blue-100">
            <h3 className="text-xl font-bold mb-3">
              Income Tracking
            </h3>
            <p className="text-gray-600">
              Keep track of all your incoming money
              and monitor your earnings.
            </p>
          </div>

          <div className="p-7 rounded-xl bg-green-50 border border-green-100">
            <h3 className="text-xl font-bold mb-3">
              Expense Management
            </h3>
            <p className="text-gray-600">
              Record and organize your expenses
              to understand where your money goes.
            </p>
          </div>

          <div className="p-7 rounded-xl bg-purple-50 border border-purple-100">
            <h3 className="text-xl font-bold mb-3">
              Payment Monitoring
            </h3>
            <p className="text-gray-600">
              Monitor pending payments and stay
              updated on your financial activities.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-7 bg-slate-50 border-t">
        <p className="text-gray-500 text-sm">
          © 2026 CashFlow. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
