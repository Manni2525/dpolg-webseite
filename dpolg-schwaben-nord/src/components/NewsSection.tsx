"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  X,
  Share2,
} from "lucide-react";
import { newsArticles, NewsArticle } from "@/data/newsData";

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(
    null
  );
  const [activeFilter, setActiveFilter] = useState<string>("Alle");

  const categories = [
    "Alle",
    "Personalrat",
    "Bezirksverband",
    "Besoldung & Recht",
  ];

  const filteredArticles =
    activeFilter === "Alle"
      ? newsArticles
      : newsArticles.filter((item) => item.category === activeFilter);

  return (
    <section id="aktuelles" className="py-16 sm:py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0072BC]">
              Aktuelles & Meldungen
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1D1D1F] tracking-tight mt-2">
              Neuigkeiten aus Schwaben Nord
            </h2>
            <p className="text-base text-[#86868B] mt-2 max-w-xl">
              Informationen aus erster Hand zur Personalratsarbeit, aktuellen
              Besoldungsthemen und unseren Kreisverbänden.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#002B49] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Clean News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-3xl p-7 border border-slate-200/70 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-[#002B49]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] group-hover:text-[#0072BC] transition-colors tracking-tight line-clamp-2 leading-snug mb-3">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>

                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#002B49] group-hover:text-[#0072BC] group-hover:translate-x-1 transition-all">
                  <span>Weiterlesen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              aria-label="Schließen"
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#002B49]/10 text-[#002B49]">
                {selectedArticle.category}
              </span>
              <span className="text-xs text-slate-400">
                {selectedArticle.date}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-400">
                {selectedArticle.readTime}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight mb-5 leading-tight">
              {selectedArticle.title}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-5">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="text-xs text-slate-500">
                Veröffentlicht vom DPolG Bezirksverband Schwaben Nord
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-[#002B49] text-white rounded-full text-xs font-semibold hover:bg-[#003860] transition-colors"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
