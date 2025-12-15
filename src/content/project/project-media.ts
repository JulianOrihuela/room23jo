import { MultimediaMimeType } from "@/src/modules/file";
import { ProjectId } from "./projects";

const projectMedia: Record<
  ProjectId,
  {
    url: string;
    type: MultimediaMimeType;
  }[][]
> = {
  [ProjectId.POKEMON]: [
    [
      {
        url: "/projects/actimel-pokemon-webapp/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/actimel-pokemon-webapp/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/actimel-pokemon-webapp/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/actimel-pokemon-webapp/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/actimel-pokemon-webapp/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/actimel-pokemon-webapp/image_7.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/actimel-pokemon-webapp/image_8.webp",
        type: "image/webp",
      },
      {
        url: "/projects/actimel-pokemon-webapp/image_9.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.BURGER_KING]: [
    [
      {
        url: "/projects/burger-king-anniversary-campaign/image_1.webp",
        type: "image/webp",
      },
      {
        url: "/projects/burger-king-anniversary-campaign/image_2.jpg",
        type: "image/jpeg",
      },
    ],
    [
      {
        url: "/projects/burger-king-anniversary-campaign/image_3.jpg",
        type: "image/jpeg",
      },
    ],
    [
      {
        url: "/projects/burger-king-anniversary-campaign/image_4.jpg",
        type: "image/jpeg",
      },
      {
        url: "/projects/burger-king-anniversary-campaign/video_1.mp4",
        type: "video/mp4",
      },
    ],

    [
      {
        url: "/projects/burger-king-anniversary-campaign/image_5.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.EVIAN]: [
    [
      {
        url: "/projects/evian-brand-activation/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/evian-brand-activation/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/evian-brand-activation/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/evian-brand-activation/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/evian-brand-activation/image_5.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/evian-brand-activation/image_6.webp",
        type: "image/webp",
      },
      {
        url: "/projects/evian-brand-activation/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.BRANCA_LOLLAPALOOZA_2024]: [
    [
      {
        url: "/projects/fernet-lollapalooza-2024/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/fernet-lollapalooza-2024/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/fernet-lollapalooza-2024/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/fernet-lollapalooza-2024/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/fernet-lollapalooza-2024/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/fernet-lollapalooza-2024/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/fernet-lollapalooza-2024/image_7.webp",
        type: "image/webp",
      },
      {
        url: "/projects/fernet-lollapalooza-2024/image_8.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/fernet-lollapalooza-2024/image_8.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.DANET_SHAKE]: [
    [
      {
        url: "/projects/danet-shake/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/danet-shake/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/danet-shake/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/danet-shake/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/danet-shake/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/danet-shake/image_6.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.LOREAL_PARIS]: [
    [
      {
        url: "/projects/loreal-paris/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/loreal-paris/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/loreal-paris/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/loreal-paris/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/loreal-paris/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/loreal-paris/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/loreal-paris/image_7.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/loreal-paris/image_8.webp",
        type: "image/webp",
      },
      {
        url: "/projects/loreal-paris/image_9.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.BRANCA_LOLLAPALOOZA_2023]: [
    [
      {
        url: "/projects/fernet-lollapalooza-2023/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/fernet-lollapalooza-2023/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/fernet-lollapalooza-2023/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/fernet-lollapalooza-2023/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/fernet-lollapalooza-2023/image_5.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/fernet-lollapalooza-2023/image_6.webp",
        type: "image/webp",
      },
      {
        url: "/projects/fernet-lollapalooza-2023/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.BRANCA_ARMADORES]: [
    [
      {
        url: "/projects/branca-armadores/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/branca-armadores/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/branca-armadores/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/branca-armadores/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/branca-armadores/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/branca-armadores/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/branca-armadores/image_7.webp",
        type: "image/webp",
      },
      {
        url: "/projects/branca-armadores/image_8.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/branca-armadores/image_9.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/branca-armadores/image_10.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.BIMBO_ARTESANO_SENTIDOS]: [
    [
      {
        url: "/projects/bimbo-artesano-sentidos/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/bimbo-artesano-sentidos/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/bimbo-artesano-sentidos/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/bimbo-artesano-sentidos/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/bimbo-artesano-sentidos/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/bimbo-artesano-sentidos/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/bimbo-artesano-sentidos/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.SUPAN]: [
    [
      {
        url: "/projects/supan/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/supan/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/supan/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/supan/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/supan/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/supan/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/supan/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.ADIDAS]: [
    [
      {
        url: "/projects/adidas/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/adidas/image_2.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/adidas/image_3.webp",
        type: "image/webp",
      },
      {
        url: "/projects/adidas/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/adidas/image_5.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/adidas/image_6.webp",
        type: "image/webp",
      },
      {
        url: "/projects/adidas/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.ROYAL_ENFIELD]: [
    [
      {
        url: "/projects/royal-enfield/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/royal-enfield/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/royal-enfield/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/royal-enfield/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/royal-enfield/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/royal-enfield/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/royal-enfield/image_7.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/royal-enfield/image_8.webp",
        type: "image/webp",
      },
      {
        url: "/projects/royal-enfield/image_9.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.GIORGIO_ARMANI_MY_WAY_PARFUM]: [
    [
      {
        url: "/projects/giorgio-armani-my-way-parfum/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/giorgio-armani-my-way-parfum/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/giorgio-armani-my-way-parfum/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/giorgio-armani-my-way-parfum/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/giorgio-armani-my-way-parfum/image_5.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.VICHY_LABORATORIES]: [
    [
      {
        url: "/projects/vichy-laboratories/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/vichy-laboratories/image_2.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/vichy-laboratories/image_3.webp",
        type: "image/webp",
      },
      {
        url: "/projects/vichy-laboratories/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/vichy-laboratories/image_5.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/vichy-laboratories/image_6.webp",
        type: "image/webp",
      },
      {
        url: "/projects/vichy-laboratories/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.LANCOME_IDOLE]: [
    [
      {
        url: "/projects/lancome-idole/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/lancome-idole/lancome_idole_2.mp4",
        type: "video/mp4",
      },
      {
        url: "/projects/lancome-idole/image_2.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/lancome-idole/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/lancome-idole/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/lancome-idole/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/lancome-idole/lancome_idole_3.mp4",
        type: "video/mp4",
      },
    ],
  ],
  [ProjectId.LA_ROCHE_POSAY_NIACINAMIDE]: [
    [
      {
        url: "/projects/la-roche-posay-niacinamide/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/la-roche-posay-niacinamide/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/la-roche-posay-niacinamide/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/la-roche-posay-niacinamide/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/la-roche-posay-niacinamide/image_5.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/la-roche-posay-niacinamide/image_6.webp",
        type: "image/webp",
      },
      {
        url: "/projects/la-roche-posay-niacinamide/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.LA_ROCHE_POSAY_SOLARES]: [
    [
      {
        url: "/projects/la-roche-posay-solares/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/la-roche-posay-solares/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/la-roche-posay-solares/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/la-roche-posay-solares/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/la-roche-posay-solares/image_5.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/la-roche-posay-solares/image_6.webp",
        type: "image/webp",
      },
      {
        url: "/projects/la-roche-posay-solares/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.MISS_DIOR_PARFUM]: [
    [
      {
        url: "/projects/miss-dior-parfum/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/miss-dior-parfum/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/miss-dior-parfum/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/miss-dior-parfum/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/miss-dior-parfum/image_5.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/miss-dior-parfum/image_6.webp",
        type: "image/webp",
      },
      {
        url: "/projects/miss-dior-parfum/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.DIOR]: [
    [
      {
        url: "/projects/dior-maybelline/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/dior-maybelline/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/dior-maybelline/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/dior-maybelline/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/dior-maybelline/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/dior-maybelline/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/dior-maybelline/image_7.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/dior-maybelline/image_8.webp",
        type: "image/webp",
      },
      {
        url: "/projects/dior-maybelline/image_9.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.SERNOVA]: [
    [
      {
        url: "/projects/sernova/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/sernova/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/sernova/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/sernova/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/sernova/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/sernova/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/sernova/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.BIMBO_ARTESANO_PONQUE]: [
    [
      {
        url: "/projects/bimbo-artesano-ponque/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/bimbo-artesano-ponque/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/bimbo-artesano-ponque/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/bimbo-artesano-ponque/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/bimbo-artesano-ponque/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/bimbo-artesano-ponque/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/bimbo-artesano-ponque/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.POETT_FRAGANCIAS]: [
    [
      {
        url: "/projects/poett-fragancias/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/poett-fragancias/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/poett-fragancias/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/poett-fragancias/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/poett-fragancias/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/poett-fragancias/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/poett-fragancias/image_7.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.HUGGIES]: [
    [
      {
        url: "/projects/huggies/image_1.webp",
        type: "image/webp",
      },
      {
        url: "/projects/huggies/image_2.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/huggies/image_3.webp",
        type: "image/webp",
      },
      {
        url: "/projects/huggies/image_4.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.DANONINO]: [
    [
      {
        url: "/projects/danonino/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/danonino/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/danonino/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/danonino/image_4.webp",
        type: "image/webp",
      },
    ],
[
      {
        url: "/projects/danonino/image_5.webp",
        type: "image/webp",
      },
    ],
[
      {
        url: "/projects/danonino/image_6.webp",
        type: "image/webp",
      },
    ],[
      {
        url: "/projects/danonino/image_7.webp",
        type: "image/webp",
      },
    ],[
      {
        url: "/projects/danonino/image_8.webp",
        type: "image/webp",
      },
    ],[
      {
        url: "/projects/danonino/image_9.webp",
        type: "image/webp",
      },
    ],[
      {
        url: "/projects/danonino/image_10.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.GARNIER_SOLID]: [
    [
      {
        url: "/projects/garnier/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/garnier/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/garnier/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/garnier/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/garnier/image_5.webp",
        type: "image/webp",
      },
      {
        url: "/projects/garnier/image_6.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/garnier/image_7.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/garnier/image_8.webp",
        type: "image/webp",
      },
      {
        url: "/projects/garnier/image_9.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.CLOROX]: [
    [
      {
        url: "/projects/clorox/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/clorox/image_2.webp",
        type: "image/webp",
      },
      {
        url: "/projects/clorox/image_3.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/clorox/image_4.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/clorox/image_5.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.EVIAN_JAPON]: [
    [
      {
        url: "/projects/evian-japon/image_1.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/evian-japon/image_2.webp",
        type: "image/webp",
      },
    ],
    [
      {
        url: "/projects/evian-japon/image_3.webp",
        type: "image/webp",
      },
    ],
  ],
  [ProjectId.CBSE_YERBA_MATE]: [
    [
      {
        url: "/projects/cbse-yerba-mate/cbse_yerba_mate_video_1.mp4",
        type: "video/mp4",
      },
    ],
    [
      {
        url: "/projects/cbse-yerba-mate/cbse_yerba_mate_video_2.mp4",
        type: "video/mp4",
      },
    ],
    [
      {
        url: "/projects/cbse-yerba-mate/cbse_yerba_mate_video_3.mp4",
        type: "video/mp4",
      },
    ],
  ],
};

export { projectMedia };
