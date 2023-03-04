export const LocationInitstate = {
  country_code: "",
  country_name: "",
  city: "",
  postal: "",
  latitude: 0,
  longitude: 0,
  IPv4: "",
  state: "",
};

export const TimeZoneInitState = {
  ip: "",
  hostname: "",
  type: "",
  range_type: {
    type: "",
    description: "",
  },
  connection: {
    asn: 0,
    organization: "",
    isp: "",
    range: "",
  },
  location: {
    geonames_id: 0,
    latitude: 0,
    longitude: 0,
    zip: "",
    continent: {
      code: "",
      name: "",
      name_translated: "",
    },
    country: {
      alpha2: "",
      alpha3: "",
      calling_codes: [""],
      currencies: [
        {
          symbol: "",
          name: "",
          symbol_native: "",
          decimal_digits: 0,
          rounding: 0,
          code: "",
          name_plural: "",
        },
      ],
      emoji: "",
      ioc: "",
      languages: [],
      name: "",
      name_translated: "",
      timezones: [""],
      is_in_european_union: false,
      fips: "",
      geonames_id: 0,
      hasc_id: "",
      wikidata_id: "",
    },
    city: {
      fips: "",
      alpha2: "",
      geonames_id: "",
      hasc_id: "",
      wikidata_id: "",
      name: "",
      name_translated: "",
    },
    region: {
      fips: "",
      alpha2: "",
      geonames_id: 0,
      hasc_id: "",
      wikidata_id: "",
      name: "",
      name_translated: "",
    },
  },
  tlds: [""],
  timezone: {
    id: "",
    current_time: "",
    code: "",
    is_daylight_saving: false,
    gmt_offset: 0,
  },
  security: {
    is_anonymous: "",
    is_bot: "",
    is_known_attacker: "",
    is_proxy: "",
    is_spam: "",
    is_tor: "",
    proxy_type: "",
    threat_score: "",
  },
  domains: {
    count: "",
    domains: [],
  },
};

export const deatilsKeys = [
  {
    id: "timezone",
    label: "CURRENT TIMEZONE",
  },
  {
    id: "day_of_year",
    label: "Day of the year",
  },
  {
    id: "day_of_week",
    label: "Day of the week",
  },
  {
    id: "week_number",
    label: "Week number",
  },
];

export interface QuoteI {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export interface QuoteInitI {
  data: QuoteI;
  quoteFetching: boolean;
  isError: boolean;
}

export const QuoteInitstate = {
  _id: "",
  content: "",
  author: "",
  tags: [],
  authorSlug: "",
  length: 0,
  dateAdded: "",
  dateModified: "",
};
