"use client";

import { useEffect, useState } from "react";

export default function LiveChatPaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPayments() {
      try {
        const res = await fetch("/api/live-chat/payment-get");
        const data = await res.json();
        if (data.success) {
          setPayments(data.data);
        }
      } catch (error) {
        console.error("Error fetching payments:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPayments();
  }, []);

  if (loading)
    return <div className="p-8 text-gray-600">Loading payments...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">💬 Live Chat Payments</h1>
      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Txn ID</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{p.name}</td>
                  <td className="px-4 py-2">{p.email}</td>
                  <td className="px-4 py-2">{p.phone}</td>

                  <td className="px-4 py-2">₹{p.amount}</td>
                  <td
                    className={`px-4 py-2 font-medium ${
                      p.status === "success"
                        ? "text-green-600"
                        : p.status === "failed"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {p.status}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {new Date(p.createdAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-2">{p.txnid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
