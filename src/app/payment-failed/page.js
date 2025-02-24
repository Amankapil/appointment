import Link from "next/link";

export default function PaymentFailedPage() {
  return (
    <div>
      <h1>Payment Failed</h1>
      <p>There was an issue processing your payment.</p>
      <Link className="text-blue-600" href="/booking"> go back</Link>
    </div>
  );
}
