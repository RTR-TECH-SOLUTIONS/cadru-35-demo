// TODO(real): datele reale ale clientului (nume, telefon, email, adresă, program).
// Până atunci scrie „Placeholder" peste tot, ca nimeni să nu ia de bun
// un nume, un om sau o adresă pe care le-am inventat noi.
export const site = {
  name: "Placeholder",
  nameLines: ["PLACEHOLDER"],
  tagline: "Placeholder pentru sloganul brandului.",
  city: "București",
  address: "Adresă placeholder, București",
  phone: "+40 700 000 000",
  phoneHref: "tel:+40700000000",
  whatsapp: "40700000000",
  email: "contact@placeholder.ro",
  schedule: [
    ["Luni – Vineri", "10:00 – 19:00"],
    ["Sâmbătă", "doar cu programare"],
    ["Duminică", "pe teren, la evenimente"],
  ],
  since: 2014,
};

export const nav = [
  { label: "Acasă", href: "/" },
  { label: "Despre noi", href: "/despre-noi" },
  { label: "Servicii", href: "/servicii" },
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "foto-studio",
    index: "01",
    title: "Foto studio",
    short:
      "Portrete de business, produs, fashion, maternitate. 80 mp cu ciclorama albă, fundaluri de hârtie și lumini Profoto.",
    href: "/servicii/foto-studio",
  },
  {
    slug: "foto-eveniment",
    index: "02",
    title: "Foto eveniment",
    short:
      "Nunți, botezuri, cununii, evenimente de firmă. Documentar, fără poziții forțate: fotografiem ce se întâmplă.",
    href: "/servicii/foto-eveniment",
  },
  {
    slug: "video-eveniment",
    index: "03",
    title: "Video eveniment",
    short:
      "Teaser de 60 de secunde, highlight de 5 minute și filmul integral. Sunetul luat separat, cu lavaliere.",
    href: "/servicii/video-eveniment",
  },
];

export const stats = [
  { value: "2014", label: "de când fotografiem" },
  { value: "300+", label: "evenimente acoperite" },
  { value: "80 mp", label: "studio propriu" },
  { value: "21 zile", label: "termen de livrare" },
];

// TODO(real): testimoniale reale, cu acordul clienților
export const testimonials = [
  {
    quote:
      "Ne-au cerut lista cu momentele importante cu două săptămâni înainte. Nu s-a pierdut nimic din ziua noastră, nici discursul fratelui meu, nici plecarea de acasă.",
    author: "Placeholder",
    context: "placeholder — nuntă",
  },
  {
    quote:
      "Aveam nevoie de 40 de portrete pentru echipă într-o singură zi. Au venit cu un plan pe ore și am terminat cu 20 de minute mai devreme.",
    author: "Placeholder",
    context: "placeholder — portrete de echipă",
  },
  {
    quote:
      "Teaserul de un minut l-am primit a doua zi și l-am pus pe Instagram cât era lumea încă în poveste. Filmul mare a venit în trei săptămâni, exact cum au zis.",
    author: "Placeholder",
    context: "placeholder — video nuntă",
  },
];
