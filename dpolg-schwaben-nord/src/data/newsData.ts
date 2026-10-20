export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: "Personalrat" | "Besoldung & Recht" | "Bezirksverband" | "Aktionen";
  readTime: string;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "personalratswahl-2026-ergebnis",
    title: "Personalratswahl 2026: Robert Frank und Andreas Bauer an der Spitze bestätigt",
    excerpt:
      "Starkes Vertrauensvotum bei der PRW 2026: Mit 8 von 15 Sitzen stellt die DPolG weiterhin die klare Mehrheit im Personalrat des Polizeipräsidiums Schwaben Nord.",
    content: [
      "Das Personalratsgremium des Polizeipräsidiums Schwaben Nord besteht aus 15 Mitgliedern (12 Beamte und 3 Tarifbeschäftigte). Acht Gremiumsmitglieder sind für die Personalratsarbeit freigestellt.",
      "Im neuen Gremium gehören sieben Beamte und eine Tarifbeschäftigte der DPolG an. Nach der konstituierenden Sitzung wurden Robert Frank als Personalratsvorsitzender und Andreas Bauer als stellvertretender Personalratsvorsitzender eindrucksvoll in ihren Ämtern bestätigt.",
      "Gemeinsam mit Simone Götzeler und Florian Nowadnick stellt die DPolG vier freigestellte Personalräte für das PP Schwaben Nord – gemäß unserem unverrückbaren Motto #FÜRDICHAMDRANSTEN!",
    ],
    date: "14. Oktober 2026",
    category: "Personalrat",
    readTime: "3 Min. Lesezeit",
    featured: true,
  },
  {
    id: "kreisverband-dillingen-franzen",
    title: "Kreisverband Dillingen/Donau-Ries: Corinna Franzen übernimmt den Vorsitz",
    excerpt:
      "Mit Corinna Franzen vertritt eine profilierte Kriminalbeamtin den nördlichen Dienstbereich und stärkt die Stimme der Kripo in der bayerischen DPolG-Kommission Kriminalpolizei.",
    content: [
      "Seit März 2026 ist der Kreisverband (KV) Dillingen/Donau-Ries durch Corinna Franzen als KV-Vorsitzende neu aufgestellt. Zugleich fungiert sie als 1. Stellvertretende Bezirksvorsitzende des BV Schwaben Nord.",
      "Mit ihrer Berufung in die DPolG-Kommission Kriminalpolizei ist gewährleistet, dass die spezifischen Herausforderungen im Kriminalfachdezernat Augsburg sowie der Kriminalpolizei Dillingen direkt auf Landesebene Gehör finden.",
      "Damit sind im Bezirksverband Schwaben Nord alle satzungsgemäßen Ämter und Fachbeauftragten lückenlos und schlagkräftig besetzt.",
    ],
    date: "28. September 2026",
    category: "Bezirksverband",
    readTime: "2 Min. Lesezeit",
    featured: false,
  },
  {
    id: "ballungsraumzulage-und-besoldung",
    title: "Ballungsraumzulage & Besoldung: Was Kolleginnen und Kollegen in Schwaben Nord wissen müssen",
    excerpt:
      "Das PP Schwaben Nord vereint Ballungsraum- und Flächenpräsidium. Die DPolG fordert weiterhin faire Ausgleiche und konsequente Verbesserungen bei den Schichtzulagen.",
    content: [
      "Das PP Schwaben Nord nimmt zusammen mit Mittelfranken eine besondere Doppelrolle in Bayern ein: Als Ballungsraumpräsidium im Wirtschaftsraum Augsburg und zugleich Flächenpräsidium bis an die Donau.",
      "Die DPolG Schwaben Nord setzt sich dafür ein, dass die Ballungsraumzulage die tatsächlichen Lebenshaltungs- und Wohnkosten widerspiegelt und Schichtdienstleistende durch höhere Dienst-zu-ungünstigen-Zeiten (DUZ) spürbar entlastet werden.",
      "Rechtsschutz-Tipp: Bei Fragen zu Beihilfe, Stufenfestsetzung oder Dienstunfällen steht unser Rechtsschutzbüro allen DPolG-Mitgliedern beratend zur Seite.",
    ],
    date: "12. September 2026",
    category: "Besoldung & Recht",
    readTime: "4 Min. Lesezeit",
    featured: false,
  },
];
