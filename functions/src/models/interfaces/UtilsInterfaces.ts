

export type Score = {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}

export type Goals = {
  home: number;
  away: number;
}

export type StatusShort = "FT" | "PST";

export type Timezone = "UTC";

export type Paging = {
  current: number;
  total: number;
}
