
"use client";

import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
    type: "Income",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.amount ||
      !formData.category ||
      !formData.date
    ) {
      return;
    }

    onAddTransaction?.(formData);

    setFormData({
      name: "",
      amount: "",
      category: "",
      date: "",
      type: "Income",
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Add New Transaction
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Transaction Name"
          name="name"
          placeholder="Enter transaction name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Input
          label="Amount (₹)"
          name="amount"
          type="number"
          placeholder="Enter amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <Input
          label="Category"
          name="category"
          placeholder="Enter category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <Input
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transaction Type
          </label>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <Button type="submit" variant="primary">
          Add Transaction
        </Button>
      </form>
    </div>
  );
}
