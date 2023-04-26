"use client";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="text-2xl font-semibold font-mono cursor-pointer select-none"
      onClick={() => router.push("/")}
    >
      <span className="text-blue-700">Mero</span>
      <span className="text-red-600">Trips</span>
    </div>
  );
};

export default Logo;
