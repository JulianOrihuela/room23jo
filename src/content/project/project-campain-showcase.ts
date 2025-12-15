import { MultimediaMimeType } from "@/src/modules/file";
import { ProjectId } from "./projects";

const projectCampaignShowcase: Record<
  ProjectId,
  { url: string; type: MultimediaMimeType }
> = {
  [ProjectId.BURGER_KING]: {
    type: "video/mp4",
    url: "/projects/burger-king-anniversary-campaign/burguer_king.mp4",
  },
  [ProjectId.EVIAN]: {
    type: "video/mp4",
    url: "/projects/evian-brand-activation/recap_evian_wide_v5.mp4",
  },
  [ProjectId.BRANCA_LOLLAPALOOZA_2024]: {
    type: "video/mp4",
    url: "/projects/fernet-lollapalooza-2024/fernet_2024_1.mp4",
  },
  [ProjectId.POKEMON]: {
    type: "image/webp",
    url: "/projects/actimel-pokemon-webapp/pokemon_banner.webp",
  },
  [ProjectId.DANET_SHAKE]: {
    type: "video/mp4",
    url: "/projects/danet-shake/danet_shake.mp4",
  },
  [ProjectId.LOREAL_PARIS]: {
    type: "video/mp4",
    url: "/projects/loreal-paris/loreal_paris.mp4",
  },
  [ProjectId.BRANCA_LOLLAPALOOZA_2023]: {
    type: "video/mp4",
    url: "/projects/fernet-lollapalooza-2023/fernet_2023.mp4",
  },
  [ProjectId.BRANCA_ARMADORES]: {
    type: "video/mp4",
    url: "/projects/branca-armadores/branca_armador.mp4",
  },
  [ProjectId.BIMBO_ARTESANO_SENTIDOS]: {
    type: "video/mp4",
    url: "/projects/bimbo-artesano-sentidos/bimbo_artesano.mp4",
  },
  [ProjectId.SUPAN]: {
    type: "video/mp4",
    url: "/projects/supan/supan.mp4",
  },
  [ProjectId.ADIDAS]: {
    type: "video/mp4",
    url: "/projects/adidas/adidas_originals.mp4",
  },
  [ProjectId.ROYAL_ENFIELD]: {
    type: "video/mp4",
    url: "/projects/royal-enfield/royal_enfield.mp4",
  },
  [ProjectId.GIORGIO_ARMANI_MY_WAY_PARFUM]: {
    type: "video/mp4",
    url: "/projects/giorgio-armani-my-way-parfum/giorgio_armani_my_way_parfum.mp4",
  },
  [ProjectId.VICHY_LABORATORIES]: {
    type: "video/mp4",
    url: "/projects/vichy-laboratories/vichy_laboratories.mp4",
  },
  [ProjectId.LANCOME_IDOLE]: {
    type: "video/mp4",
    url: "/projects/lancome-idole/lancome_idole.mp4",
  },
  [ProjectId.LA_ROCHE_POSAY_NIACINAMIDE]: {
    type: "video/mp4",
    url: "/projects/la-roche-posay-niacinamide/la_roche_posay_niacinamide.mp4",
  },
  [ProjectId.LA_ROCHE_POSAY_SOLARES]: {
    type: "video/mp4",
    url: "/projects/la-roche-posay-solares/la_roche_posay_solares.mp4",
  },
  [ProjectId.MISS_DIOR_PARFUM]: {
    type: "video/mp4",
    url: "/projects/miss-dior-parfum/miss_dior_parfum.mp4",
  },
  [ProjectId.DIOR]: {
    type: "image/webp",
    url: "/projects/dior-maybelline/maybelline_banner_2.webp",
  },
  [ProjectId.SERNOVA]: {
    type: "video/mp4",
    url: "/projects/sernova/sernova.mp4",
  },
  [ProjectId.BIMBO_ARTESANO_PONQUE]: {
    type: "video/mp4",
    url: "/projects/bimbo-artesano-ponque/bimbo_artesano_ponque.mp4",
  },
  [ProjectId.POETT_FRAGANCIAS]: {
    type: "video/mp4",
    url: "/projects/poett-fragancias/poett_fragancias.mp4",
  },
  [ProjectId.HUGGIES]: {
    type: "video/mp4",
    url: "/projects/huggies/huggies.mp4",
  },
  [ProjectId.DANONINO]: {
    type: "video/mp4",
    url: "/projects/danonino/danonino.mp4",
  },
  [ProjectId.GARNIER_SOLID]: {
    type: "video/mp4",
    url: "/projects/garnier/garnier.mp4",
  },
  [ProjectId.CLOROX]: {
    type: "video/mp4",
    url: "/projects/clorox/clorox.mp4",
  },
  [ProjectId.EVIAN_JAPON]: {
    type: "image/webp",
    url: "/projects/evian-japon/image_0.webp",
  },
  [ProjectId.CBSE_YERBA_MATE]: {
    type: "image/jpeg",
    url: "/projects/cbse-yerba-mate/cbse_yerba_mate_packaging.jpg",
  },
};

export { projectCampaignShowcase };
