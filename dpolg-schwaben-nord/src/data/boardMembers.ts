export interface BoardMember {
  id: string;
  name: string;
  role: string;
  subRole?: string;
  phone: string;
  email: string;
  office: string;
  image: string;
  isFreigestellt?: boolean;
  highlightTag?: string;
  bio: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: "robert-frank",
    name: "Robert Frank",
    role: "Bezirksvorsitzender",
    subRole: "Personalratsvorsitzender PP Schwaben Nord",
    phone: "0821/323-1051",
    email: "dpolgswn@web.de",
    office: "Polizeipräsidium Schwaben Nord (Augsburg)",
    image: "/images/robert-frank.png",
    isFreigestellt: true,
    highlightTag: "Personalratsvorsitzender",
    bio: "Nach der Personalratswahl 2026 erneut im Amt als Personalratsvorsitzender bestätigt. Er vertritt mit Nachdruck die Belange aller Beschäftigten im gesamten Präsidiumsbereich.",
  },
  {
    id: "corinna-franzen",
    name: "Corinna Franzen",
    role: "1. Stellv. Bezirksvorsitzende",
    subRole: "Vorsitzende KV Dillingen/Donau-Ries & Kommission Kriminalpolizei",
    phone: "0821/323-1128",
    email: "dpolgswn@web.de",
    office: "Kriminalpolizei Dillingen / Nördlicher Dienstbereich",
    image: "/images/corinna-franzen.png",
    isFreigestellt: false,
    highlightTag: "Kommission Kripo",
    bio: "Seit März 2026 Vorsitzende des Kreisverbands Dillingen/Donau-Ries und Vertreterin des BV Schwaben Nord in der bayerischen DPolG-Kommission Kriminalpolizei.",
  },
  {
    id: "simone-goetzeler",
    name: "Simone Götzeler",
    role: "Stellv. Bezirksvorsitzende",
    subRole: "Vorsitzende KV Augsburg & Personalrätin",
    phone: "0821/323-1056",
    email: "dpolgswn@web.de",
    office: "Polizeipräsidium Schwaben Nord (Augsburg)",
    image: "/images/simone-goetzeler.png",
    isFreigestellt: true,
    highlightTag: "KV Augsburg Vorsitz",
    bio: "Freigestellte Personalrätin und Vorsitzende des mitgliederstarken Kreisverbands Augsburg. Engagierte Ansprechpartnerin für Beamte und Tarifbeschäftigte.",
  },
  {
    id: "andreas-bauer",
    name: "Andreas Bauer",
    role: "Stellv. Bezirksvorsitzender",
    subRole: "Stellv. Personalratsvorsitzender PP Schwaben Nord",
    phone: "0821/323-1054",
    email: "dpolgswn@web.de",
    office: "Polizeipräsidium Schwaben Nord (Augsburg)",
    image: "/images/andreas-bauer.png",
    isFreigestellt: true,
    highlightTag: "Stellv. PR-Vorsitzender",
    bio: "Nach der PRW 2026 als stellvertretender Personalratsvorsitzender im Amt bestätigt. Setzt sich mit hoher Fachexpertise für faire Arbeitsbedingungen und transparente Dienstpostenbesetzungen ein.",
  },
];

export const additionalRepresentatives = [
  {
    name: "Florian Nowadnick",
    role: "Freigestellter Personalrat (DPolG)",
    office: "PP Schwaben Nord",
    phone: "0821/323-1055",
    email: "dpolgswn@web.de",
    motto: "#FÜRDICHAMDRANSTEN",
  },
];
