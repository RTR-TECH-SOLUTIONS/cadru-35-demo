import type { ImageMetadata } from "astro";

import cs01 from "../assets/img/cs-01-verighete.jpg";
import cs02 from "../assets/img/cs-02-film.jpg";
import cs03 from "../assets/img/cs-03-studio-noapte.jpg";
import cs04 from "../assets/img/cs-04-dans.jpg";
import cs05 from "../assets/img/cs-05-portret.jpg";
import cs06 from "../assets/img/cs-06-newborn.jpg";
import cs07 from "../assets/img/cs-07-masa.jpg";
import cs08 from "../assets/img/cs-08-trepied.jpg";
import cs09 from "../assets/img/cs-09-buchet.jpg";
import cs10 from "../assets/img/cs-10-copil.jpg";
import cs11 from "../assets/img/cs-11-obiectiv.jpg";
import cs12 from "../assets/img/cs-12-hol.jpg";

export interface Frame {
  src: ImageMetadata;
  alt: string;
  /** numărul de pe rebate, ca pe o rolă adevărată: 33, 33A, 34, 34A… */
  no: string;
  /** cadrele însemnate cu creion, ca selecțiile unui editor */
  pick?: boolean;
}

/** O rolă întreagă, în ordinea în care a fost trasă. */
export const roll: Frame[] = [
  { src: cs02, alt: "Mâini încărcând un film de 35 mm într-un aparat manual", no: "30" },
  { src: cs03, alt: "Studio gol noaptea, cu un singur softbox aprins", no: "30A" },
  { src: cs11, alt: "Obiectiv și cablu pe un birou de lemn zgâriat", no: "31", pick: true },
  { src: cs08, alt: "Aparat pe trepied, siluetă în contra-lumina unei ferestre", no: "31A" },
  { src: cs01, alt: "Prim-plan cu verigheta trecută pe deget", no: "32" },
  { src: cs09, alt: "Mâinile unei florărese legând un buchet pe masa de lucru", no: "32A" },
  { src: cs07, alt: "Masa lungă de nuntă, pusă și cu lumânările aprinse", no: "33" },
  { src: cs04, alt: "Invitați dansând sub ghirlande de becuri, cu mișcare în cadru", no: "33A", pick: true },
  { src: cs05, alt: "Portretul unui bărbat în vârstă râzând, lumină laterală", no: "34" },
  { src: cs06, alt: "Mâna unui nou-născut strângând degetul unui adult", no: "34A" },
  { src: cs10, alt: "Copil alergând prin iarbă înaltă la asfințit", no: "35" },
  { src: cs12, alt: "Un cuplu îndepărtându-se pe un hol, spre lumina ușii", no: "35A", pick: true },
];
