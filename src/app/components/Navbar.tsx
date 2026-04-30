"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Marcello Genovese" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#insights", label: "Insights" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`w-full px-5 md:px-8 lg:px-10 xl:px-14 2xl:px-0 transition-all duration-300 ease-in-out ${
        scrolled
          ? "backdrop-blur-md bg-[#cecbc8]/85 "
          : ""
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between ">
        <Link
          href="/"
          aria-label="Marcello Genovese — Home"
          onClick={() => setOpen(false)}
          className="flex items-center transition-opacity duration-200 hover:opacity-70"
        >
          <Image
            src="/media/logo.svg"
            alt="Marcello Genovese"
            width={160}
            height={42}
            className="h-9 w-auto"
          />
        </Link>

        <ul className="navbar-links hidden items-center gap-4 lg:gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative font-geist inline-block text-[16px] font-normal tracking-tight text-neutral-800 transition-opacity duration-200 hover:opacity-70 hover:text-neutral-950"
              >
                {link.label}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-neutral-900 transition-[width] duration-300 ease-out group-hover:w-full"
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden font-geist text-[18px] font-medium tracking-tight text-neutral-900 underline decoration-neutral-400 decoration-1 underline-offset-[6px] transition-opacity duration-200 hover:opacity-70 hover:decoration-neutral-900 md:inline-block"
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
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.25 }}
            className="inline-flex"
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
          </motion.div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-x-0 top-20 bottom-0 z-40 bg-black/20 md:hidden"
              aria-hidden
            />
            <motion.div
              key="panel"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-x-0 top-20 z-50 border-t border-neutral-200/70 bg-white md:hidden overflow-hidden"
            >
              <ul className="px-6">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.07,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-neutral-200/70 last:border-0"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block font-geist py-4 text-[16px] tracking-tight text-neutral-800 transition-opacity duration-200 hover:opacity-70 hover:text-neutral-950"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: navLinks.length * 0.07,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="py-5"
                >
                  <Link
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="inline-block font-geist text-[18px] font-medium tracking-tight text-neutral-900 underline decoration-neutral-400 decoration-1 underline-offset-[6px] transition-opacity duration-200 hover:opacity-70 hover:decoration-neutral-900"
                  >
                    Contact Marcello
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
