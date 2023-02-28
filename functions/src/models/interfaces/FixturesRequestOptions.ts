export type BaseFixturesOptions = Partial<{
  id: number;
  live: "all" | "id-id";
  date: string;
  league: number;
  season: number;
  team: number;
  last: number;
  next: number;
  from: string;
  to: string;
  round: string;
  timezone: string;
  status: string;
  venue: number;
  ids: string;
}>
