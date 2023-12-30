export interface GetChart {
  status: string;
  message: string;
  data: chartData[];
}

export interface chartData {
  workoutDay: Date;
  tssActual: number;
  tssPlanned: number;
  ctl: number;
  atl: number;
  tsb: number;
  ifActual: number;
  ifPlanned: number;
}

export interface GetEvent {
  status: string;
  message: string;
  data: Event[];
}

export interface Event {
  id: number;
  name: string;
  event_date: Date;
  location: string;
}
