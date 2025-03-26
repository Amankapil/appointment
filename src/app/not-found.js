import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4 mb-10">Oops! Page not found.</p>

        <Link
          href="/"
          className="mt-6 bg-[#101010] text-[16px] font-salernomi text-white px-[24px] py-[12px] rounded hover:bg-[#333333] transition-all duration-300 shadow-button"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
