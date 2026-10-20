"use client";

import React from "react";
import {
  Scale,
  Users2,
  TrendingUp,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Car,
  HeartHandshake,
  Building2,
  Coins,
} from "lucide-react";

interface BentoGridProps {
  onOpenMembership: () => void;
  onOpenContact: () => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  onOpenMembership,
  onOpenContact,
}) => {
  return (
    <section id="vorteile" className="py-16 sm:py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0072BC]">
            Warum DPolG Schwaben Nord?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight mt-2">
            Rückhalt im Dienst.
            <br />
            <span className="text-slate-400 font-semibold">
              Vorteile, die zählen.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] mt-4 max-w-2xl leading-relaxed">
            Als stärkste Vertretung im Polizeipräsidium Schwaben Nord verbinden
            wir juristischen Vollschutz mit direkter, menschlicher Präsenz vor
            Ort.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Item 1: Rechtsschutz & Diensthaftpflicht (Gross, 8 Cols) */}
          <div className="md:col-span-8 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#002B49]/5 border border-[#002B49]/10 flex items-center justify-center text-[#002B49]">
                  <Scale className="w-6 h-6 text-[#0072BC]" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#0072BC] border border-blue-100">
                  100% gewerkschaftlicher Vollschutz
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] tracking-tight mb-3">
                Rechtsschutz & Diensthaftpflicht
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Polizeidienst birgt täglich rechtliche Risiken. Wir lassen Dich
                nicht im Regen stehen: Bei Dienstunfällen, Disziplinarverfahren
                oder Regressforderungen stehen erfahrene Fachanwälte an Deiner
                Seite – ohne Wenn und Aber.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#0072BC] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-snug">
                    10.000.000 € Deckungssumme für Diensthaftpflicht
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Car className="w-4 h-4 text-[#0072BC] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-snug">
                    Dienst-Kfz-Regress & Eigenschaden-Abdeckung
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <ShieldAlert className="w-4 h-4 text-[#0072BC] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-snug">
                    Straf- & Disziplinar-Rechtsschutz vor Gericht
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <HeartHandshake className="w-4 h-4 text-[#0072BC] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-snug">
                    Rechtsberatung durch spezialisierte dbb Juristen
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                Gilt für Beamtinnen, Beamte, Anwärter & Tarifbeschäftigte
              </span>
              <button
                onClick={onOpenMembership}
                className="text-xs font-semibold text-[#002B49] hover:text-[#0072BC] flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer"
              >
                <span>Jetzt absichern</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bento Item 2: Personalrat vor Ort (4 Cols) */}
          <div className="md:col-span-4 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-[#002B49] mb-6">
                <Users2 className="w-6 h-6 text-[#002B49]" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Direkter Draht
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight mt-1 mb-3">
                Personalrat & Dienststellen
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Vier freigestellte DPolG-Personalräte sind im PP Schwaben Nord
                für Dich im Einsatz: Robert Frank, Andreas Bauer, Simone
                Götzeler und Florian Nowadnick.
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                  <span>Dienststellenbesuche & BEM</span>
                  <span className="text-[#0072BC] font-semibold">Aktiv</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                  <span>Dienstpostenbesetzungen</span>
                  <span className="text-[#0072BC] font-semibold">Fair</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                  <span>Dienstvereinbarungen</span>
                  <span className="text-[#0072BC] font-semibold">Transparent</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={onOpenContact}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#002B49] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Ansprechpartner kontaktieren</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Bento Item 3: Aktuelle Erfolge / Tarif & Besoldung (6 Cols) */}
          <div className="md:col-span-6 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6">
                <Coins className="w-6 h-6" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                Konkrete Ergebnisse
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight mt-1 mb-3">
                Tarif, Besoldung & Zulagen
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Wir fordern nicht nur, wir setzen um. Von der Ballungsraumzulage
                im Raum Augsburg über spürbare Erhöhungen der Schichtzulagen bis
                hin zur verfassungsgemäßen Alimentation.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-base font-extrabold text-[#002B49]">
                    Ballungsraum
                  </span>
                  <p className="text-[11px] text-slate-500">
                    Zulage für Raum Augsburg gesichert
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-base font-extrabold text-[#0072BC]">
                    DUZ & Schicht
                  </span>
                  <p className="text-[11px] text-slate-500">
                    Höhere Sätze für Nacht & Wochenende
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>dbb Tarifgemeinschaft Bayern</span>
              <span className="font-semibold text-[#002B49]">
                Verhandlungsstark
              </span>
            </div>
          </div>

          {/* Bento Item 4: Junge Polizei & Nachwuchs (6 Cols) */}
          <div className="md:col-span-6 bg-gradient-to-br from-[#002B49] to-[#0B2545] text-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#009FE3] mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-[#009FE3]">
                Junge Polizei Schwaben Nord
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-1 mb-3">
                Vom ersten Tag der Ausbildung an
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Für Anwärterinnen und Anwärter: Voller Rechtsschutz, kostenlose
                Lehr- und Ausbildungsmaterialien, Diensthaftpflicht und
                persönliche Betreuung durch die Junge Polizei vor Ort in
                Schwaben Nord.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-200">
                  Starter-Pakete
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-200">
                  Prüfungsvorbereitung
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-slate-200">
                  Kostenlose Gesetzestexte
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-300">
                Nur symbolischer Anwärter-Beitrag
              </span>
              <button
                onClick={onOpenMembership}
                className="text-xs font-semibold text-[#009FE3] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Anwärter-Vorteile sichern</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
