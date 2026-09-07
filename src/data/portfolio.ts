import type { ImageMetadata } from "astro";

import pBusiness from "../assets/img/p-business.jpg";
import pProdus from "../assets/img/p-produs.jpg";
import pFashion from "../assets/img/p-fashion.jpg";
import pMaternitate from "../assets/img/p-maternitate.jpg";
import pNewborn from "../assets/img/p-newborn.jpg";
import svcStudio from "../assets/img/svc-studio.jpg";
import pNuntaCamp from "../assets/img/p-nunta-camp.jpg";
import pNuntaMasa from "../assets/img/p-nunta-masa.jpg";
import pBotez from "../assets/img/p-botez.jpg";
import pCorporate from "../assets/img/p-corporate.jpg";
import pPetrecere from "../assets/img/p-petrecere.jpg";
import heroNunta from "../assets/img/hero-nunta.jpg";
import pVideoSetup from "../assets/img/p-video-setup.jpg";
import pMontaj from "../assets/img/p-montaj.jpg";
import heroVideo from "../assets/img/hero-video.jpg";
import svcVideo from "../assets/img/svc-video.jpg";

export type Category = "studio" | "eveniment" | "video";

export interface Shot {
  src: ImageMetadata;
  alt: string;
  caption: string;
  category: Category;
}

export const categories: { key: Category | "toate"; label: string }[] = [
  { key: "toate", label: "Toate" },
  { key: "studio", label: "Foto studio" },
  { key: "eveniment", label: "Foto eveniment" },
  { key: "video", label: "Video" },
];

export const portfolio: Shot[] = [
  {
    src: pBusiness,
    alt: "Portret de business pe fundal gri închis, lumină laterală moale",
    caption: "Portret de business · fundal grafit",
    category: "studio",
  },
  {
    src: pNuntaCamp,
    alt: "Miri mergând printr-un câmp la apus, contra-lumină caldă",
    caption: "Nuntă · ședință la apus",
    category: "eveniment",
  },
  {
    src: pProdus,
    alt: "Flacon de sticlă chihlimbarie pe hârtie crem, umbră tăioasă de soare",
    caption: "Fotografie de produs · lumină dură",
    category: "studio",
  },
  {
    src: pVideoSetup,
    alt: "Cameră de film pe trepied într-o sală de evenimente goală",
    caption: "Pregătire de filmare · sală de nuntă",
    category: "video",
  },
  {
    src: pFashion,
    alt: "Fotografie fashion de studio, palton negru pe fundal bej",
    caption: "Lookbook · fundal hârtie bej",
    category: "studio",
  },
  {
    src: pNuntaMasa,
    alt: "Detaliu de masă la petrecere: lumânări, pahare și eucalipt",
    caption: "Nuntă · detalii de decor",
    category: "eveniment",
  },
  {
    src: pMontaj,
    alt: "Cameră de montaj noaptea, două monitoare cu linia de timp",
    caption: "Post-producție · corecție de culoare",
    category: "video",
  },
  {
    src: pMaternitate,
    alt: "Portret de maternitate în studio, rochie neutră, lumină de fereastră",
    caption: "Maternitate · lumină difuză",
    category: "studio",
  },
  {
    src: pBotez,
    alt: "Botez într-o biserică veche, lumină caldă căzând peste cristelniță",
    caption: "Botez · lumină naturală de biserică",
    category: "eveniment",
  },
  {
    src: heroVideo,
    alt: "Videograf filmând cu camera pe gimbal la un eveniment de seară",
    caption: "Filmare · gimbal, seara",
    category: "video",
  },
  {
    src: pCorporate,
    alt: "Eveniment de firmă: vorbitor la pupitru, capetele publicului în prim-plan",
    caption: "Eveniment de firmă · conferință",
    category: "eveniment",
  },
  {
    src: pNewborn,
    alt: "Pregătire pentru ședință newborn: pătură tricotată și coșuleț",
    caption: "Newborn · pregătirea setului",
    category: "studio",
  },
  {
    src: heroNunta,
    alt: "Miri dansând seara sub ghirlande de becuri",
    caption: "Nuntă · primul dans",
    category: "eveniment",
  },
  {
    src: svcVideo,
    alt: "Cameră de film pe rig, cu monitorul arătând mireasa în cadru",
    caption: "Video · cadru din highlight",
    category: "video",
  },
  {
    src: svcStudio,
    alt: "Portret de studio, sacou bej pe fundal gri neutru",
    caption: "Portret · personal branding",
    category: "studio",
  },
  {
    src: pPetrecere,
    alt: "Artificii de tort ținute deasupra mesei la o aniversare",
    caption: "Aniversare · momentul tortului",
    category: "eveniment",
  },
];
