"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TransactionSummary() {
  const searchParams = useSearchParams(); // Get query params
  const data = searchParams.get("data");
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(data));
        setTransactionData(parsedData);
      } catch (error) {
        console.error("Failed to parse data:", error);
      }
    }
  }, [data]);

  if (!transactionData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Transaction Summary</h1>
      <pre>{JSON.stringify(transactionData, null, 2)}</pre>
    </div>
  );
}
