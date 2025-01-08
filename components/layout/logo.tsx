"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-black font-bold text-lg">K</span>
        </div>
        <span className="ml-2 text-lg font-semibold bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">KiwiQ AI</span>
      </div>
    </Link>
  );
}
