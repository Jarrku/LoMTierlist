export type roleName = 'top' | 'jungle' | 'mid' | 'adc' | 'support';

export type tierName = 'S' | 'A' | 'B' | 'C';

export type divisionName =
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'master';

export interface Header {
  patchNumber: string;
  role: roleName;
}

export interface ChampionIcon {
  iconUrl: string;
  name: string;
}

export interface Tiers {
  s: ChampionIcon[];
  a: ChampionIcon[];
  b: ChampionIcon[];
  c: ChampionIcon[];
}

export interface Division {
  division: divisionName;
  tiers: Tiers;
}

export interface Changes {
  buffed: ChampionIcon[];
  nerfed: ChampionIcon[];
  unchanged: ChampionIcon[];
}

export interface Highlights {
  splashUrl: string;
  text: string;
}

export interface Props {
  theme: roleName;
  impression: string;
  header: Header;
  tierlist: Division[];
  changes: Changes;
  highlights: Highlights;
}
