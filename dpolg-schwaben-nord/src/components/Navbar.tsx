"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Shield,
  PhoneCall,
  UserPlus,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

interface NavbarProps {
  onOpenMembership: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMembership,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Vorteile & Bento", href: "#vorteile" },
    { label: "Aktuelles", href: "#aktuelles" },
    { label: "Vorstand vor Ort", href: "#vorstand" },
    { label: "Personalrat & Fakten", href: "#fakten" },
    { label: "Downloads", href: "#downloads" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl shadow-sm border-b border-slate-200/70"
            : "bg-[#F5F5F7]/80 backdrop-blur-md border-b border-black/[0.04]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-36 h-10 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/dpolg_logo.svg"
                  alt="DPolG Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col border-l border-slate-300 pl-3">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#002B49]">
                  Schwaben Nord
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  Landesverband Bayern
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-medium text-[#1D1D1F]/80 hover:text-[#0072BC] transition-colors tracking-tight"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#002B49] bg-white border border-slate-200/80 rounded-full hover:bg-slate-50 transition-all shadow-xs cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#0072BC]" />
                <span>Schnelldraht</span>
              </button>

              <button
                onClick={onOpenMembership}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#002B49] hover:bg-[#003860] active:scale-[0.98] rounded-full shadow-sm hover:shadow transition-all cursor-pointer group"
              >
                <UserPlus className="w-3.5 h-3.5 text-[#009FE3] transition-transform group-hover:scale-110" />
                <span>Mitglied werden</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenMembership}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-[#002B49] rounded-full shadow-xs"
              >
                Beitreten
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menü öffnen"
                className="p-2 rounded-xl text-slate-700 hover:bg-white/80 border border-transparent hover:border-slate-200/60 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#002B49]">
                  DPolG Bezirksverband Schwaben Nord
                </span>
                <p className="text-xs text-slate-500 mt-0.5">
                  Für dich am dransten im PP Schwaben Nord
                </p>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-800 hover:text-[#0072BC] py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMembership();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#002B49] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                  <UserPlus className="w-4 h-4 text-[#009FE3]" />
                  <span>Jetzt online Mitglied werden</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#0072BC]" />
                  <span>Vorstand & Personalrat kontaktieren</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
