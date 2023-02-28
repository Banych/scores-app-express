import { Goals, Paging, Score, StatusShort, Timezone } from "./UtilsInterfaces";

export type BaseFixtureResults<T> = {
  get: string;
  errors: unknown[];
  results: number;
  paging: Paging;
  parameters: T;
  response: unknown[];
}

export type Fixture = {
  fixture: FixtureInfo;
  league: FixtureLeague;
  teams: {
    home: FixtureTeam;
    away: FixtureTeam;
  };
  goals: Goals;
  score: Score;
  events: FixtureEvent[];
  lineups: Lineup[];
  statistics: FixtureStatistic[];
  players: Squad[];
}

export type FixtureInfo = {
  id: number;
  referee: string;
  timezone: Timezone;
  date: Date;
  timestamp: number;
  periods: Periods;
  venue: FixtureVenue;
  status: FixtureStatus;
}

export type FixtureEvent = {
  time: FixtureTimeInfo;
  team: FixtureTeam;
  player: FixturePlayer;
  assist: FixturePlayer;
  type: FixtureEventType;
  detail: string;
  comments: null;
}

export type FixturePlayer = {
  id: number;
  name: string;
}

export type FixtureTeam = {
  id: number;
  name: string;
  logo: string;
  update?: Date;
  winner?: boolean;
}

export type FixtureTimeInfo = {
  elapsed: number;
  extra: null;
}

export type FixtureEventType = "Card" | "Goal" | "subst";

export type Periods = {
  first: number | null;
  second: number | null;
}

export type FixtureStatus = {
  long: string;
  short: StatusShort;
  elapsed: number;
}

export type FixtureVenue = {
  id: number;
  name: string;
  city: string;
}

export type FixtureLeague = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

export type Lineup = {
  team: FixtureTeam;
  coach: PersonWithPhoto;
  formation: string;
  startXI: StartXIItem[];
  substitutes: StartXIItem[];
}

export type StartXIItem = {
  player: StartXIPlayer;
}

export type StartXIPlayer = {
  id: number;
  name: string;
  number: number;
  pos: Pos;
}

export type Pos = "G" | "D" | "M" | "F";

export type Squad = {
  team: FixtureTeam;
  players: Player[];
}

export type Player = {
  player: PersonWithPhoto;
  statistics: PlayerStatistic[];
}

export type PersonWithPhoto = {
  id: number;
  name: string;
  photo: string;
}

export type PlayerStatistic = {
  games: Games;
  offsides: number;
  shots: Shots;
  goals: StatisticGoals;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
}

export type Cards = {
  yellow: number;
  red: number;
}

export type Dribbles = {
  attempts: number;
  success: number;
  past: number;
}

export type Duels = {
  total: number;
  won: number;
}

export type Fouls = {
  drawn: number;
  committed: number;
}

export type Games = {
  minutes: number;
  number: number;
  position: Pos;
  rating: string;
  captain: boolean;
  substitute: boolean;
}

export type StatisticGoals = {
  total: number;
  conceded: number;
  assists: number;
  saves: number;
}

export type Passes = {
  total: number;
  key: number;
  accuracy: string;
}

export type Penalty = {
  won: number;
  commited: number;
  scored: number;
  missed: number;
  saved: number;
}

export type Shots = {
  total: number;
  on: number;
}

export type Tackles = {
  total: number;
  blocks: number;
  interceptions: number;
}

export type FixtureStatistic = {
  team: FixtureTeam;
  statistics: StatisticStatistic[];
}

export type StatisticStatistic = {
  type: string;
  value: string | number;
}
