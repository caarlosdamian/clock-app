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

export interface TimeZoneSlice {
  ip: string;
  hostname: string;
  type: string;
  range_type: {
    type: string;
    description: string;
  };
  connection: {
    asn: number;
    organization: string;
    isp: string;
    range: string;
  };
  location: {
    geonames_id: number;
    latitude: number;
    longitude: number;
    zip: string;
    continent: {
      code: string;
      name: string;
      name_translated: string;
    };
    country: {
      alpha2: string;
      alpha3: string;
      calling_codes: string[];
      currencies: any[];
      emoji: string;
      ioc: string;
      languages: any[
      ];
      name: string;
      name_translated: string;
      timezones: string[];
      is_in_european_union: boolean;
      fips: string;
      geonames_id: number;
      hasc_id: string;
      wikidata_id: string;
    };
    city: {
      fips: string;
      alpha2: string;
      geonames_id: string;
      hasc_id: string;
      wikidata_id: string;
      name: string;
      name_translated: string;
    };
    region: {
      fips: string;
      alpha2: string;
      geonames_id: number;
      hasc_id: string;
      wikidata_id: string;
      name: string;
      name_translated: string;
    };
  };
  tlds: string[];
  timezone: {
    id: string;
    current_time: string;
    code: string;
    is_daylight_saving: boolean;
    gmt_offset: number;
  };
  security: {
    is_anonymous: string;
    is_bot: string;
    is_known_attacker: string;
    is_proxy: string;
    is_spam: string;
    is_tor: string;
    proxy_type: string;
    threat_score: string;
  };
  domains: {
    count: string;
    domains: any[];
  };
}

export interface TimeZonesliceInitState {
  data: TimeZoneSlice;
  timeZoneFetching: boolean;
  isError: boolean;
}
