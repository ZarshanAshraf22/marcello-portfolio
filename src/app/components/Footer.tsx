"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import FadeInUp from "./FadeInUp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Insights", href: "/insights" },
  { label: "Imprint", href: "/imprint" },
  { label: "Privacy Policy", href: "/privacy" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [shake, setShake] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <footer className="w-full bg-[#0f0f0f] pb-20 pt-30 px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-0">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-8">
          {/* LEFT COLUMN */}
          <FadeInUp delay={0}>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <Image src="/media/footer_logo.svg" alt="Marcello Genovese" width={48} height={48} className="h-12 w-45"
              />
            </div>

            <p className="font-geist mt-8 text-[30px] sm:text-[24px] lg:text-3xl font-light leading-[1.35] text-[#CECBC8]">
              Marcello Genovese Product
              <br />
              Executive and Technology
              <br />
              Strategist
            </p>
          </div>
          </FadeInUp>

          {/* RIGHT COLUMN */}
          <FadeInUp delay={0.15}>
          <div className="flex flex-col items-start gap-10 md:items-end">
            {/* Newsletter */}
            <div className="w-full lg:w-auto">
              <p className="font-satoshi mb-3 text-left text-base text-white/55">
                Subscribe to our Newsletter
              </p>

              <motion.div
                animate={shake ? { x: [-8, 8, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] py-[6px] pl-5 pr-3 w-fit md:w-[300px] xl:w-[520px]"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    disabled={status === "loading" || status === "success"}
                    className="font-satoshi flex-1 border-none bg-transparent text-[0.9rem] text-white placeholder-white/30 outline-none disabled:opacity-60"
                  />

                  <button
                    type="submit"
                    aria-label="Subscribe"
                    disabled={status === "loading"}
                    className="flex h-9 w-9 shrink-0 items-center justify-center bg-transparent text-white/70 transition-all duration-200 hover:border-white hover:text-white disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <motion.svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </motion.svg>
                    ) : status === "success" ? (
                      <span className="text-[18px] font-medium text-green-500">✓</span>
                    ) : status === "error" ? (
                      <span className="text-[20px] font-medium text-red-500">×</span>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    )}
                  </button>
                </form>
              </motion.div>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-green-500 mt-2 font-satoshi"
                >
                  You&apos;re subscribed! Thank you.
                </motion.p>
              )}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 justify-center sm:justify-end mx-auto sm:mx-0">
              <SocialIcon label="X (Twitter)" href="https://x.com">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>

              <SocialIcon label="Instagram" href="https://instagram.com">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </SocialIcon>

              <SocialIcon label="LinkedIn" href="https://linkedin.com">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </SocialIcon>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap items-center justify-start mt-8 mx-auto sm:mx-0">
              {navLinks.map((link, i) => (
                <span key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    className="font-satoshi text-base text-[#CECBC8] transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                  {i < navLinks.length - 1 && (
                    <span className="mx-2 text-xs text-white/25">.</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
          </FadeInUp>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-transparent text-white/70
        transition-all duration-200 hover:border-white/70 hover:bg-white hover:text-[#151515]"
    >
      {children}
    </a>
  );
}
