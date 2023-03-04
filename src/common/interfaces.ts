export interface Time {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: any;
  dst_offset: number;
  dst_until: any;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

export interface TimeSliceI {
  data: Time;
  timeFetching: boolean;
  isError: boolean;
}

export interface Location {
  country_code: string;
  country_name: string;
  city: string;
  postal: string;
  latitude: number;
  longitude: number;
  IPv4: string;
  state: string;
}

export interface LocationsliceI {
  locationFetching: boolean;
  data: Location;
  isError: boolean;
}
