"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Copy,
  Check,
  Building,
  Shield,
  ExternalLink,
  Users,
} from "lucide-react";
import { boardMembers, additionalRepresentatives } from "@/data/boardMembers";

export const TeamSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPhone = (id: string, phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="vorstand" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#002B49]/5 text-[#002B49] mb-4">
            <Users className="w-3.5 h-3.5 text-[#0072BC]" />
            <span>Persönlich. Kompetent. Vor Ort.</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight">
            Dein Vorstand & Personalrat
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] mt-4 leading-relaxed">
            Keine anonyme Gewerkschaftszentrale, sondern Kolleginnen und
            Kollegen aus dem täglichen Dienst im Polizeipräsidium Schwaben Nord.
          </p>
        </div>

        {/* Board Members Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#F5F5F7] rounded-3xl p-6 border border-slate-200/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative mb-5">
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 shadow-inner border border-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  {member.highlightTag && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#002B49]/90 text-white backdrop-blur-md shadow-sm">
                      {member.highlightTag}
                    </span>
                  )}
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-[#1D1D1F] tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#0072BC] mt-0.5 uppercase tracking-wide">
                  {member.role}
                </p>

                {member.subRole && (
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    {member.subRole}
                  </p>
                )}

                {/* Office Info */}
                <div className="flex items-start gap-1.5 mt-3 text-xs text-slate-500">
                  <Building className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                  <span className="line-clamp-2">{member.office}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${member.phone.replace(/[^0-9]/g, "")}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 bg-[#002B49] hover:bg-[#003860] text-white text-xs font-semibold rounded-xl transition-all shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#009FE3]" />
                    <span>{member.phone}</span>
                  </a>

                  <button
                    onClick={() => handleCopyPhone(member.id, member.phone)}
                    title="Telefonnummer kopieren"
                    className="p-2 bg-white hover:bg-slate-100 border border-slate-200/80 rounded-xl text-slate-600 transition-colors cursor-pointer"
                  >
                    {copiedId === member.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${member.email}?subject=Anfrage an ${member.name} (DPolG Schwaben Nord)`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-white hover:bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-medium rounded-xl transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0072BC]" />
                  <span>E-Mail schreiben</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Freigestellter Personalrat Banner */}
        <div className="mt-8 bg-[#F5F5F7] rounded-3xl p-6 sm:p-8 border border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#002B49] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              PR
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0072BC]">
                Freigestellter Personalrat (DPolG)
              </span>
              <h4 className="text-lg font-bold text-[#1D1D1F]">
                Florian Nowadnick
              </h4>
              <p className="text-xs text-slate-600">
                Gemeinsam mit Robert Frank, Andreas Bauer und Simone Götzeler
                Euer vierköpfiges freigestelltes DPolG-Team im PP Schwaben Nord.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:dpolgswn@web.de?subject=Kontakt DPolG Personalrat PP Schwaben Nord"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-[#002B49] text-xs font-semibold rounded-full shadow-xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0072BC]" />
              <span>dpolgswn@web.de</span>
            </a>
            <span className="px-3.5 py-1 rounded-full bg-[#002B49]/10 text-[#002B49] text-xs font-bold">
              #FÜRDICHAMDRANSTEN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
