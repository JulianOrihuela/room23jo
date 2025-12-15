import { Project } from "@/src/modules/project";

export enum ProjectId {
	BURGER_KING,
	EVIAN,
  BRANCA_LOLLAPALOOZA_2024,
	POKEMON,
  DANET_SHAKE,
  LOREAL_PARIS,
  BRANCA_LOLLAPALOOZA_2023,
  BRANCA_ARMADORES,
  BIMBO_ARTESANO_SENTIDOS,
  SUPAN,
  ADIDAS,
  ROYAL_ENFIELD,
  GIORGIO_ARMANI_MY_WAY_PARFUM,
  VICHY_LABORATORIES,
  LANCOME_IDOLE,
  LA_ROCHE_POSAY_NIACINAMIDE,
  LA_ROCHE_POSAY_SOLARES,
  MISS_DIOR_PARFUM,
  DIOR,
  SERNOVA,
  BIMBO_ARTESANO_PONQUE,
  POETT_FRAGANCIAS,
  HUGGIES,
  DANONINO,
  GARNIER_SOLID,
  CLOROX,
  EVIAN_JAPON,
  CBSE_YERBA_MATE
}

const projects: Project[] = [
  {
    id: ProjectId.BURGER_KING,
    name: "Burger King",
    publicName: "BURGER KING",
    shortName: "Burger King",
    description: "Global Anniversary Campaign.",
    category: [2, 1], // Campaing, Digital
    slug: "burger-king-anniversary-campaign"
  },
  {
    id: ProjectId.EVIAN,
    name: "Evian",
    publicName: "EVIAN",
    shortName: "Evian",
    description: "A brand activation to reinforce the importance of hydration during workout.",
    category: [4], // Experience
    slug: "evian-brand-activation"
  },
  {
    id: ProjectId.BRANCA_LOLLAPALOOZA_2024,
    name: "Fernet Branca Lollapalooza 2024",
    publicName: "FERNET BRANCA LOLLAPALOOZA 2024",
    shortName: "Branca Lollapalooza 2024",
    description: "Argentine brand, aimed to create a unique and memorable experience at Lollapalooza",
    category: [4], // Experience
    slug: "fernet-lollapalooza-2024"
  },
  {
    id: ProjectId.POKEMON,
    name: "Actimel Pokémon",
    publicName: "ACTIMEL POKÉMON",
    shortName: "Actimel Pokémon",
    description: 'Webapp with gaming, collectability, and "health immunity tips". 1.4 Million Unique scans in Iberia.',
    category: [1], // Digital
    slug: "actimel-pokemon-webapp"
  },
  {
    id: ProjectId.DANET_SHAKE,
    name: "Danet Shake",
    publicName: "DANET SHAKE",
    shortName: "Danet Shake",
    description: 'Say It with a Song – Unlocking Connections <br></br> Through QR on Pack.',
    category: [1, 2, 3], // Packaging, Campaing, Digital
    slug: "danet-shake"
  },
  {
    id: ProjectId.LOREAL_PARIS,
    name: "Paris Elvive Glygolic Gloss",
    publicName: "Paris Elvive Glygolic Gloss",
    shortName: "Loreal Paris",
    description: 'Product launch event for VIP clients, press and Influencers',
    category: [4], // Experience
    slug: "loreal-paris"
  },
  {
    id: ProjectId.BRANCA_LOLLAPALOOZA_2023,
    name: "FERNET BRANCA LOLLAPALOOZA 2023",
    publicName: "Branca Lollapalooza 2023",
    shortName: "Branca Lollapalooza 2023",
    description: "Lollapalooza outdoes itself in attendance and experiences, and Fernet Branca reinvents itself",
    category: [4], // Experience
    slug: "fernet-lollapalooza-2023"
  },
  {
    id: ProjectId.BRANCA_ARMADORES,
    name: "Fernet Branca Armadores",
    publicName: "FERNET BRANCA ARMADORES",
    shortName: "Branca Armadores",
    description: "Fernet Branca focused its communication on its key differentiators",
    category: [2], // Campaing
    slug: "branca-armadores"
  },
  {
    id: ProjectId.BIMBO_ARTESANO_SENTIDOS,
    name: "Bimbo artesano",
    publicName: "BIMBO ARTESANO ELEVA TUS SENTIDOS",
    shortName: "Bimbo artesano",
    description: "Bimbo Artesano stands out for its commitment to natural ingredients and dedication in every creation",
    category: [2], // Campaing
    slug: "bimbo-artesano-sentidos"
  },
  {
    id: ProjectId.SUPAN,
    name: "Supan",
    publicName: "SIEMPRE JUNTOS, SIEMPRE SUPÁN",
    shortName: "Supan",
    description: "The Ecuadorian people are known for their strength, optimism, and constant effort for a better future for their families",
    category: [2], // Campaing
    slug: "supan"
  },
  {
    id: ProjectId.ADIDAS,
    name: "Adidas",
    publicName: "ADIDAS",
    shortName: "Adidas",
    description: "Launch of a new 'Always Original' Line with a communication focus on Gender Minorities",
    category: [4], // Experience
    slug: "adidas"
  },
  {
    id: ProjectId.ROYAL_ENFIELD,
    name: "Royal Enfield",
    publicName: "ROYAL ENFIELD SHOTGUN 650",
    shortName: "Royal Enfield",
    description: "Product launch event for dealers, clients, press and Influencers",
    category: [4], // Experience
    slug: "royal-enfield"
  },
  {
    id: ProjectId.GIORGIO_ARMANI_MY_WAY_PARFUM,
    name: "Giorgo Armani My Way Parfum",
    publicName: "GIORGIO ARMANI MY WAY PARFUM",
    shortName: "Giorgio Armani",
    description: "Podium and architecture",
    category: [4], // Experience
    slug: "giorgio-armani-my-way-parfum"
  },
  {
    id: ProjectId.VICHY_LABORATORIES,
    name: "Vichy Laboratories",
    publicName: "VICHY LABORATORIES",
    shortName: "Vichy Laboratories",
    description: "Creative development of a Digital Platform to engage and educate consumers",
    category: [1, 4], // Digital, Experience
    slug: "vichy-laboratories"
  },
  {
    id: ProjectId.LANCOME_IDOLE,
    name: "LANCÔME IDÔLE",
    publicName: "LANCÔME IDÔLE",
    shortName: "LANCÔME IDÔLE",
    description: "Product launch for VIP clients, press and Influencers",
    category: [4], // Experience
    slug: "lancome-idole"
  },
  {
    id: ProjectId.LA_ROCHE_POSAY_NIACINAMIDE,
    name: "La Roche-Posay Niacinamide 10",
    publicName: "La Roche-Posay NIACINAMIDE 10",
    shortName: "Posay Niacinamide 10",
    description: "Product launch event for VIP clients, press and Influencers",
    category: [4], // Experience
    slug: "la-roche-posay-niacinamide"
  },
  {
    id: ProjectId.LA_ROCHE_POSAY_SOLARES,
    name: "La Roche-Posay Solares",
    publicName: "La Roche-Posay SOLARES",
    shortName: "Posay Solares",
    description: "Event for clients and dermatologists to educate about sun care",
    category: [4], // Experience
    slug: "la-roche-posay-solares"
  },
  {
    id: ProjectId.MISS_DIOR_PARFUM,
    name: "Miss Dior Parfum",
    publicName: "MISS DIOR PARFUM",
    shortName: "Miss Dior Parfum",
    description: "Podium and architecture",
    category: [4], // Experience
    slug: "miss-dior-parfum"
  },
  {
    id: ProjectId.DIOR,
    name: "Dior Maybelline Lumi Matte",
    publicName: "MAYBELLINE LUMI MATTE",
    shortName: "Maybelline Lumi Matte",
    description: 'Product launch event',
    category: [4], // Experience
    slug: "dior-maybelline"
  },
  {
    id: ProjectId.SERNOVA,
    name: "Sernova Never Ending Night",
    publicName: "SERNOVA NEVER ENDING NIGHT",
    shortName: "Sernova",
    description: "Sernova Vodka launched its new positioning campaign, 'The Best of the Night'",
    category: [4], // Experience
    slug: "sernova"
  },
  {
    id: ProjectId.BIMBO_ARTESANO_PONQUE,
    name: "Bimbo Artesano El Ponqué En Su Máxima Expresión",
    publicName: "BIMBO ARTESANO EL PONQUÉ EN SU MÁXIMA EXPRESIÓN",
    shortName: "Bimbo Artesano",
    description: "Bimbo Artesano launched its new line of cakes, evoking the flavor and consistency of homemade ones",
    category: [2], // Campaing
    slug: "bimbo-artesano-ponque"
  },
  {
    id: ProjectId.POETT_FRAGANCIAS,
    name: "Poett Fragancias Para Expresarte",
    publicName: "POETT FRAGANCIAS PARA EXPRESARTE",
    shortName: "Poett Fragancias",
    description: "Poett introduces a new way to personalize spaces by mixing its fragrances",
    category: [2], // Campaing
    slug: "poett-fragancias"
  },
  {
    id: ProjectId.HUGGIES,
    name: "Huggies Noche De las Madres",
    publicName: "HUGGIES NOCHE DE LAS MADRES",
    shortName: "Huggies",
    description: "Having a baby completely transforms parents' routines, as they dedicate their time to caring for their child 24/7",
    category: [2], // Campaing
    slug: "huggies"
  },
  {
    id: ProjectId.DANONINO,
    name: "Danonino Paw Patrol",
    publicName: "DANONINO PAW PATROL",
    shortName: "Danonino",
    description: "Danonino x Paw Patrol: A Digital Adventure to Engage Families",
    category: [3], // Packaging
    slug: "danonino"
  },
  {
    id: ProjectId.GARNIER_SOLID,
    name: "Garnier Solid Shampoo",
    publicName: "GARNIER SOLID SHAMPOO",
    shortName: "Garnier Solid Shampoo",
    description: "Product launch event for VIP clients, press and Influencers",
    category: [4], // Experience
    slug: "garnier"
  },
  {
    id: ProjectId.CLOROX,
    name: "Clorox El Futuro Dice Presente",
    publicName: "CLOROX EL FUTURO DICE PRESENTE",
    shortName: "Clorox",
    description: "In the post-pandemic context, returning to in-person schooling presented a challenge",
    category: [2], // Campaing
    slug: "clorox"
  },
  {
    id: ProjectId.EVIAN_JAPON,
    name: "Evian Japon",
    publicName: "EVIAN JAPON",
    shortName: "Evian Japon",
    description: "Evian x Mickey Mouse: Iconic Design Collaboration",
    category: [3], // Packaging
    slug: "evian-japon"
  },
  {
    id: ProjectId.CBSE_YERBA_MATE,
    name: "CBSÉ Yerba Mate",
    publicName: "CBSÉ Yerba Mate",
    shortName: "CBSÉ Yerba Mate",
    description: "CBSé Yerba Mate with Guaraná: Glow-in-the-Dark Packaging for an Energizing Launch",
    category: [3], // Packaging
    slug: "cbse-yerba-mate"
  },
];

export { projects };
