"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  ChevronRight,
  Sparkles,
  PhoneCall,
  Download,
  Users,
  CheckCircle2,
  Award,
} from "lucide-react";

interface HeroProps {
  onOpenMembership: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenMembership,
  onOpenContact,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#0072BC]/10 via-[#009FE3]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#0072BC] animate-pulse" />
            <span className="text-xs font-semibold text-[#002B49] tracking-tight">
              Bezirksverband Schwaben Nord
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-medium text-slate-600">
              #FÜRDICHAMDRANSTEN
            </span>
          </div>

          {/* Main Headline (Apple Typography: tracking-tight, powerful) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08] mb-6">
            Nah am Dienst.{" "}
            <span className="bg-gradient-to-r from-[#002B49] via-[#0072BC] to-[#009FE3] bg-clip-text text-transparent">
              Stark vor Ort.
            </span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 mt-2">
              DPolG Schwaben Nord.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#86868B] max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Die verlässliche Interessenvertretung für Beamtinnen, Beamte und
            Tarifbeschäftigte im Polizeipräsidium Schwaben Nord. Mit starker
            Mehrheit im Personalrat – von Augsburg bis ins Donau-Ries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenMembership}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-[#002B49] hover:bg-[#003860] active:scale-[0.98] rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              <span>Jetzt Mitglied werden</span>
              <ChevronRight className="w-4 h-4 text-[#009FE3] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white/90 hover:bg-white border border-slate-200/90 active:scale-[0.98] rounded-full shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <Users className="w-4 h-4 text-[#0072BC]" />
              <span>Vorstand & Personalrat</span>
            </button>

            <a
              href="/Schwaben_Nord_DPolG_Bayern.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-medium text-slate-600 hover:text-[#002B49] rounded-full transition-colors"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>PDF-Übersicht</span>
            </a>
          </div>
        </div>

        {/* Bento Hero Visual Grid (Apple-Inspired Bento Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Card 1: Official Campaign Motto (#FÜRDICHAMDRANSTEN) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-sm relative overflow-hidden flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#002B49]/5 text-[#002B49] border border-[#002B49]/10">
                <Sparkles className="w-3.5 h-3.5 text-[#0072BC]" />
                Offizielles Motto
              </span>
              <span className="text-xs font-medium text-slate-400">
                Präsidiumsbereich Schwaben Nord
              </span>
            </div>

            {/* Campaign Visual Banner */}
            <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden my-3 border border-slate-100 bg-[#002B49]">
              <Image
                src="/images/fuer-dich-am-dransten.jpg"
                alt="Für Dich am dransten - DPolG Kampagne"
                fill
                className="object-contain object-center transition-transform duration-500 group-hover:scale-105 p-2"
                priority
              />
            </div>

            <div className="mt-2">
              <h3 className="text-xl font-bold text-[#1D1D1F] tracking-tight">
                #FÜRDICHAMDRANSTEN!
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Ob Streifendienst, Kriminalpolizei, Verkehrspolizei oder
                Verwaltung: Unsere 4 freigestellten DPolG-Personalräte sind
                jederzeit unkompliziert für Dich ansprechbar.
              </p>
            </div>
          </div>

          {/* Right Column Bento Cards */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {/* Card 2: Personalratswahl 2026 Confirmation */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/70 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    PRW 2026 Wahlerfolg
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Mehrheitsfraktion
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#1D1D1F] tracking-tight">
                  8 von 15 Sitzen im Personalrat
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Robert Frank (Personalratsvorsitzender) und Andreas Bauer
                  (Stellv. Personalratsvorsitzender) mit starkem Votum
                  wiedergewählt.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-center">
                <div className="bg-slate-50 rounded-xl p-2.5">
                  <span className="text-xl font-extrabold text-[#002B49]">
                    7 Beamte
                  </span>
                  <p className="text-[11px] text-slate-500 font-medium">
                    DPolG Mandate
                  </p>
                </div>
                <div className="bg-slate-50 rounded-xl p-2.5">
                  <span className="text-xl font-extrabold text-[#0072BC]">
                    1 Tarif
                  </span>
                  <p className="text-[11px] text-slate-500 font-medium">
                    DPolG Vertretung
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Vollschutz & Rechtsschutz */}
            <div className="bg-gradient-to-br from-[#002B49] to-[#071C30] text-white rounded-3xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 w-32 h-32 bg-[#0072BC]/20 rounded-full blur-2xl" />

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#009FE3]" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                    Diensthaftpflicht & Rechtsschutz
                  </span>
                </div>
                <h4 className="text-2xl font-bold tracking-tight">
                  10.000.000 €
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Deckungssumme für Dienst- und Regresshaftpflicht ohne
                  Selbstbeteiligung ab dem ersten Tag der Mitgliedschaft.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009FE3]" />
                  Inkl. Dienst-Kfz-Regress
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#009FE3]" />
                  24/7 Notfallhilfe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
