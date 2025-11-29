"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between py-6 px-6 border-b border-gray-200">
      <h1 className="text-2xl font-semibold tracking-wide">Hanif Baaba</h1>

      <nav>
        <ul className="flex items-center gap-8 text-lg font-medium">
          <li className="hover:text-gray-500 transition">
            <Link href="/Components/About">About Me</Link>
          </li>
          <li className="hover:text-gray-500 transition">
            <Link href="/https://github.com/hanifbaaba">Projects</Link>
          </li>
          <li className="hover:text-gray-500 transition">
            <Link href="/Components/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
