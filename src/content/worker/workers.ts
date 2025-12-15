import { Worker } from "@/src/modules/worker";

export enum WorkerId {
  RICHARD,
  IVANN,
  GUSTAVOA,
  GONZALOI,
  LAURAM,
  GIMENAK,
  YASMING,
}

export const workers: Worker[] = [
  {
    id: WorkerId.IVANN,
    firstName: "Ivan “Vancho”",
    lastName: "Novikov",
    position: "Co-Founder Room23",
    photo: "/workers/ivan-novikov.webp",
    slug: "ivan-novikov",
  },
  {
    id: WorkerId.RICHARD,
    firstName: "Richar",
    lastName: "Dalmada",
    position: "Co-Founder Room23",
    photo: "/workers/richar-dalmada.webp",
    slug: "richar-dalmada",
  },
  {
    id: WorkerId.GUSTAVOA,
    firstName: "Gustavo",
    lastName: "Mendez Antonetti “Pep”",
    fullNameRichText: "Gustavo Mendez <br/> Antonetti “Pep”",
    position: "General Creative Director",
    photo: "/workers/gustavo-mendez-antonetti.webp",
    slug: "gustavo-mendez-antonetti",
  },
  {
    id: WorkerId.YASMING,
    firstName: "Yasmin",
    lastName: "Cao Gatti",
    position: "Account Director for Europe",
    photo: "/workers/yasmin-cao-gatti.webp",
    slug: "yasmin-cao-gatti",
  },
  {
    id: WorkerId.GONZALOI,
    firstName: "Gonzalo",
    lastName: "Izzo",
    position: "Account Director for LATAM",
    photo: "/workers/gonzalo-izzo.webp",
    slug: "gonzalo-izzo",
  },
  {
    id: WorkerId.GIMENAK,
    firstName: "Gimena",
    lastName: "Kossmann",
    position: "Brand Experience Director",
    photo: "/workers/gimena-kossman.jpeg",
    slug: "gimena-kossmann",
  },
  {
    id: WorkerId.LAURAM,
    firstName: "Laura",
    lastName: "De Barrio Merino",
    position: "Head of Strategy",
    photo: "/workers/laura-de-barrio-merino.webp",
    slug: "laura-de-barrio-merino",
  },
];

