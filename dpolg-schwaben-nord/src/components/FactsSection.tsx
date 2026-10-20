"use client";

import React from "react";
import Image from "next/image";
import {
  Building2,
  MapPin,
  Users,
  CheckCircle,
  Award,
  Layers,
  Shield,
  FileText,
} from "lucide-react";

export const FactsSection: React.FC = () => {
  return (
    <section id="fakten" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0072BC]">
            Transparenz & Struktur
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight mt-2">
            Zahlen, Daten, Fakten
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] mt-4 leading-relaxed">
            Das Polizeipräsidium Schwaben Nord nimmt in der bayerischen Polizei
            eine besondere Stellung ein: Es vereint ein urbanes
            Ballungsraumpräsidium mit einem weiten Flächenpräsidium.
          </p>
        </div>

        {/* Skyline Banner */}
        <div className="relative w-full h-32 sm:h-48 rounded-3xl overflow-hidden mb-10 shadow-sm border border-slate-200/80 bg-slate-100">
          <Image
            src="/images/skyline-augsburg.png"
            alt="Augsburg und Schwaben Nord Skyline"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002B49]/80 via-[#002B49]/40 to-transparent flex items-center px-8">
            <div className="text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#009FE3]">
                Dienstbereich
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Augsburg • Aichach-Friedberg • Dillingen • Donau-Ries
              </h3>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Fact 1 */}
          <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-slate-200/60 flex flex-col justify-between">
            <div>
              <span className="text-4xl font-extrabold text-[#002B49] tracking-tight">
                15
              </span>
              <h4 className="text-sm font-bold text-[#1D1D1F] mt-2 mb-1">
                Personalratsmitglieder im PP
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Das Gremium setzt sich aus 12 Beamten und 3 Tarifbeschäftigten
                zusammen. 8 Gremiumsmitglieder sind freigestellt.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-[#0072BC]">
              DPolG stellt 8 Mandate (Mehrheit)
            </div>
          </div>

          {/* Fact 2 */}
          <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-slate-200/60 flex flex-col justify-between">
            <div>
              <span className="text-4xl font-extrabold text-[#0072BC] tracking-tight">
                4
              </span>
              <h4 className="text-sm font-bold text-[#1D1D1F] mt-2 mb-1">
                Freigestellte DPolG-Personalräte
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Robert Frank, Andreas Bauer, Simone Götzeler und Florian
                Nowadnick sind Vollzeit für Eure Anliegen im Einsatz.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-[#002B49]">
              #FÜRDICHAMDRANSTEN
            </div>
          </div>

          {/* Fact 3 */}
          <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-slate-200/60 flex flex-col justify-between">
            <div>
              <span className="text-4xl font-extrabold text-[#002B49] tracking-tight">
                2
              </span>
              <h4 className="text-sm font-bold text-[#1D1D1F] mt-2 mb-1">
                Starke Kreisverbände
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                KV Augsburg (Leitung: Simone Götzeler) & KV Dillingen/Donau-Ries
                (Leitung: Corinna Franzen seit März 2026).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-[#0072BC]">
              Lückenlos personell besetzt
            </div>
          </div>

          {/* Fact 4 */}
          <div className="bg-[#F5F5F7] rounded-3xl p-6 border border-slate-200/60 flex flex-col justify-between">
            <div>
              <span className="text-4xl font-extrabold text-[#009FE3] tracking-tight">
                Kripo
              </span>
              <h4 className="text-sm font-bold text-[#1D1D1F] mt-2 mb-1">
                Kommission Kriminalpolizei
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kriminalfachdezernat Augsburg & Kripo Dillingen werden durch
                Corinna Franzen direkt in der Landeskommission vertreten.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-[#002B49]">
              Gezielte Fachvertretung
            </div>
          </div>
        </div>

        {/* Detailed Info Card */}
        <div className="bg-[#F5F5F7] rounded-3xl p-8 sm:p-10 border border-slate-200/70">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#002B49] border border-slate-200 mb-4">
                <Layers className="w-3.5 h-3.5 text-[#0072BC]" />
                <span>Präsidiumsstruktur Schwaben Nord</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1D1D1F] tracking-tight mb-3">
                Doppelrolle als Ballungsraum- und Flächenpräsidium
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Im Bezirksverband (BV) Schwaben Nord sind die Angehörigen des PP
                Schwaben Nord sowie dessen Rentner und Versorgungsempfänger
                organisiert. Das Präsidium deckt sowohl den hochverdichteten
                Wirtschafts- und Ballungsraum Augsburg ab als auch die weiten
                Flächenreviere bis nach Nördlingen und Donauwörth.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seit unserem Bezirkskongress 2024 sind alle satzungsgemäßen
                Ämter besetzt. Wir garantieren Dir dadurch eine lückenlose,
                professionelle Betreuung.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <h4 className="text-sm font-bold text-[#002B49] uppercase tracking-wider">
                Gremienbesetzung nach PRW 2026
              </h4>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Robert Frank</strong> – Personalratsvorsitzender PP
                    Schwaben Nord (bestätigt)
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Andreas Bauer</strong> – Stellv.
                    Personalratsvorsitzender (bestätigt)
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Simone Götzeler & Florian Nowadnick</strong> –
                    Freigestellte DPolG-Personalräte
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Corinna Franzen</strong> – KV Dillingen/Donau-Ries &
                    Kommission Kriminalpolizei
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
