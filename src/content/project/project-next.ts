import { ProjectId } from "./projects";

export const projectNextPrev: Record<
  ProjectId,
  { next: ProjectId; prev: ProjectId }
> = {
  [ProjectId.BURGER_KING]: {
    prev: ProjectId.CBSE_YERBA_MATE,
    next: ProjectId.EVIAN,
  },
  [ProjectId.EVIAN]: {
		prev: ProjectId.BURGER_KING,
    next: ProjectId.BRANCA_LOLLAPALOOZA_2024,
  },
  [ProjectId.BRANCA_LOLLAPALOOZA_2024]: {
    prev: ProjectId.EVIAN,
    next: ProjectId.POKEMON,
  },
  [ProjectId.POKEMON]: {
    prev: ProjectId.BRANCA_LOLLAPALOOZA_2024,
		next: ProjectId.DANET_SHAKE,
  },
  [ProjectId.DANET_SHAKE]: {
    prev: ProjectId.POKEMON,
		next: ProjectId.LOREAL_PARIS,
  },
  [ProjectId.LOREAL_PARIS]: {
    prev: ProjectId.DANET_SHAKE,
		next: ProjectId.BRANCA_LOLLAPALOOZA_2023,
  },
  [ProjectId.BRANCA_LOLLAPALOOZA_2023]: {
    prev: ProjectId.LOREAL_PARIS,
		next: ProjectId.BRANCA_ARMADORES,
  },
  [ProjectId.BRANCA_ARMADORES]: {
    prev: ProjectId.BRANCA_LOLLAPALOOZA_2023,
		next: ProjectId.BIMBO_ARTESANO_SENTIDOS,
  },
  [ProjectId.BIMBO_ARTESANO_SENTIDOS]: {
    prev: ProjectId.BRANCA_ARMADORES,
		next: ProjectId.SUPAN,
  },
  [ProjectId.SUPAN]: {
    prev: ProjectId.BIMBO_ARTESANO_SENTIDOS,
		next: ProjectId.ADIDAS,
  },
  [ProjectId.ADIDAS]: {
    prev: ProjectId.SUPAN,
		next: ProjectId.ROYAL_ENFIELD,
  },
  [ProjectId.ROYAL_ENFIELD]: {
    prev: ProjectId.ADIDAS,
		next: ProjectId.GIORGIO_ARMANI_MY_WAY_PARFUM,
  },
  [ProjectId.GIORGIO_ARMANI_MY_WAY_PARFUM]: {
    prev: ProjectId.ROYAL_ENFIELD,
		next: ProjectId.VICHY_LABORATORIES,
  },
  [ProjectId.VICHY_LABORATORIES]: {
    prev: ProjectId.GIORGIO_ARMANI_MY_WAY_PARFUM,
		next: ProjectId.LANCOME_IDOLE,
  },
  [ProjectId.LANCOME_IDOLE]: {
    prev: ProjectId.VICHY_LABORATORIES,
		next: ProjectId.LA_ROCHE_POSAY_NIACINAMIDE,
  },
  [ProjectId.LA_ROCHE_POSAY_NIACINAMIDE]: {
    prev: ProjectId.LANCOME_IDOLE,
		next: ProjectId.LA_ROCHE_POSAY_SOLARES,
  },
  [ProjectId.LA_ROCHE_POSAY_SOLARES]: {
    prev: ProjectId.LA_ROCHE_POSAY_NIACINAMIDE,
		next: ProjectId.MISS_DIOR_PARFUM,
  },
  [ProjectId.MISS_DIOR_PARFUM]: {
    prev: ProjectId.LA_ROCHE_POSAY_SOLARES,
		next: ProjectId.DIOR,
  },
  [ProjectId.DIOR]: {
    prev: ProjectId.MISS_DIOR_PARFUM,
		next: ProjectId.SERNOVA,
  },
  [ProjectId.SERNOVA]: {
    prev: ProjectId.DIOR,
		next: ProjectId.BIMBO_ARTESANO_PONQUE,
  },
  [ProjectId.BIMBO_ARTESANO_PONQUE]: {
    prev: ProjectId.SERNOVA,
		next: ProjectId.POETT_FRAGANCIAS,
  },
  [ProjectId.POETT_FRAGANCIAS]: {
    prev: ProjectId.BIMBO_ARTESANO_PONQUE,
		next: ProjectId.HUGGIES,
  },
  [ProjectId.HUGGIES]: {
    prev: ProjectId.POETT_FRAGANCIAS,
		next: ProjectId.DANONINO,
  },
  [ProjectId.DANONINO]: {
    prev: ProjectId.HUGGIES,
		next: ProjectId.GARNIER_SOLID,
  },
  [ProjectId.GARNIER_SOLID]: {
    prev: ProjectId.DANONINO,
		next: ProjectId.CLOROX,
  },
  [ProjectId.CLOROX]: {
    prev: ProjectId.GARNIER_SOLID,
		next: ProjectId.EVIAN_JAPON,
  },
  [ProjectId.EVIAN_JAPON]: {
    prev: ProjectId.GARNIER_SOLID,
		next: ProjectId.CBSE_YERBA_MATE,
  },
  [ProjectId.CBSE_YERBA_MATE]: {
    prev: ProjectId.EVIAN_JAPON,
		next: ProjectId.BURGER_KING,
  },
};

