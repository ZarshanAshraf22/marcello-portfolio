"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Marcello Genovese" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#insights", label: "Insights" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-5 md:px-8 lg:px-10 xl:px-14 2xl:px-0">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between ">
        <Link
          href="/"
          aria-label="Marcello Genovese — Home"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <Image
            src="/media/logo.svg"
            alt="Marcello Genovese"
            width={160}
            height={42}
            className="h-9 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-4 lg:gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative font-geist inline-block text-[16px] font-normal tracking-tight text-neutral-800 
                  transition-colors duration-200 hover:text-neutral-950"
              >
                {link.label}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-neutral-900 transition-[width] duration-300
                     ease-out group-hover:w-full"
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden font-geist text-[18px] font-medium tracking-tight text-neutral-900 underline decoration-neutral-400 decoration-1 underline-offset-[6px] transition-colors duration-200 hover:decoration-neutral-900 md:inline-block"
        >
          Contact Marcello
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-900 transition-colors hover:bg-neutral-100 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`grid overflow-hidden border-t border-neutral-200/70 bg-white transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0 px-6">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="border-b border-neutral-200/70 last:border-0"
            >
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block font-geist py-4 text-[16px] tracking-tight text-neutral-800 transition-colors hover:text-neutral-950"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="py-5">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block font-geist text-[18px] font-medium tracking-tight text-neutral-900 underline 
                decoration-neutral-400 decoration-1 underline-offset-[6px] hover:decoration-neutral-900"
            >
              Contact Marcello
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
