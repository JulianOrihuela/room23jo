import { ProjectId } from "@/src/content/project";
import { MultimediaMimeType } from "@/src/modules/file";

export interface OurWorkVideo {
  url: string;
  mime: MultimediaMimeType;
  project: number;
}

export const videos: OurWorkVideo[] = [
  {
    url: "/projects/burger-king-anniversary-campaign/burguer_king.mp4",
    mime: "video/mp4",
    project: ProjectId.BURGER_KING,
  },
  {
    url: "/projects/evian-brand-activation/evian_video.mp4",
    mime: "video/mp4",
    project: ProjectId.EVIAN,
  },
  {
    url: "/projects/fernet-lollapalooza-2024/fernet_2024_1.mp4",
    mime: "video/mp4",
    project: ProjectId.BRANCA_LOLLAPALOOZA_2024,
  },
  {
    url: "/projects/actimel-pokemon-webapp/pokemon_banner.webp",
    mime: "image/jpeg",
    project: ProjectId.POKEMON,
  },
  {
    url: "/projects/danet-shake/danet_shake.mp4",
    mime: "video/mp4",
    project: ProjectId.DANET_SHAKE,
  },
  {
    url: "/projects/loreal-paris/image_1.webp",
    mime: "image/jpeg",
    project: ProjectId.LOREAL_PARIS,
  },
  {
    url: "/projects/fernet-lollapalooza-2023/fernet_2023.mp4",
    mime: "video/mp4",
    project: ProjectId.BRANCA_LOLLAPALOOZA_2023,
  },
  {
    url: "/projects/branca-armadores/branca_armador.mp4",
    mime: "video/mp4",
    project: ProjectId.BRANCA_ARMADORES,
  },
  {
    url: "/projects/bimbo-artesano-sentidos/bimbo_artesano.mp4",
    mime: "video/mp4",
    project: ProjectId.BIMBO_ARTESANO_SENTIDOS,
  },
  {
    url: "/projects/supan/supan.mp4",
    mime: "video/mp4",
    project: ProjectId.SUPAN,
  },
  {
    url: "/projects/adidas/adidas.mp4",
    mime: "video/mp4",
    project: ProjectId.ADIDAS,
  },
  {
    url: "/projects/royal-enfield/royal_enfield.mp4",
    mime: "video/mp4",
    project: ProjectId.ROYAL_ENFIELD,
  },
  {
    url: "/projects/giorgio-armani-my-way-parfum/giorgio_armani_my_way_parfum.mp4",
    mime: "video/mp4",
    project: ProjectId.GIORGIO_ARMANI_MY_WAY_PARFUM,
  },
  {
    url: "/projects/vichy-laboratories/vichy_laboratories.mp4",
    mime: "video/mp4",
    project: ProjectId.VICHY_LABORATORIES,
  },
  {
    url: "/projects/lancome-idole/lancome_idole.mp4",
    mime: "video/mp4",
    project: ProjectId.LANCOME_IDOLE,
  },
  {
    url: "/projects/la-roche-posay-niacinamide/la_roche_posay_niacinamide.mp4",
    mime: "video/mp4",
    project: ProjectId.LA_ROCHE_POSAY_NIACINAMIDE,
  },
  {
    url: "/projects/la-roche-posay-solares/la_roche_posay_solares.mp4",
    mime: "video/mp4",
    project: ProjectId.LA_ROCHE_POSAY_SOLARES,
  },
  {
    url: "/projects/miss-dior-parfum/miss_dior_parfum.mp4",
    mime: "video/mp4",
    project: ProjectId.MISS_DIOR_PARFUM,
  },
  {
    url: "/projects/dior-maybelline/maybelline_banner.webp",
    mime: "image/webp",
    project: ProjectId.DIOR,
  },
  {
    url: "/projects/sernova/sernova.mp4",
    mime: "video/mp4",
    project: ProjectId.SERNOVA,
  },
  {
    url: "/projects/bimbo-artesano-ponque/bimbo_artesano_ponque.mp4",
    mime: "video/mp4",
    project: ProjectId.BIMBO_ARTESANO_PONQUE,
  },
  {
    url: "/projects/poett-fragancias/poett_fragancias.mp4",
    mime: "video/mp4",
    project: ProjectId.POETT_FRAGANCIAS,
  },
  {
    url: "/projects/huggies/huggies.mp4",
    mime: "video/mp4",
    project: ProjectId.HUGGIES,
  },
  {
    url: "/projects/danonino/danonino.mp4",
    mime: "video/mp4",
    project: ProjectId.DANONINO,
  },
  {
    url: "/projects/garnier/garnier.mp4",
    mime: "video/mp4",
    project: ProjectId.GARNIER_SOLID,
  },
  {
    url: "/projects/clorox/clorox.mp4",
    mime: "video/mp4",
    project: ProjectId.CLOROX,
  },
  {
    url: "/projects/evian-japon/evian_japon_showcase.jpg",
    mime: "image/jpeg",
    project: ProjectId.EVIAN_JAPON,
  },
  {
    url: "/projects/cbse-yerba-mate/cbse_yerba_mate_packaging.jpg",
    mime: "image/jpeg",
    project: ProjectId.CBSE_YERBA_MATE,
  },
	{
    url: "/projects/danonino/danonino.mp4",
    mime: "video/mp4",
    project: ProjectId.DANONINO,
  },
];

