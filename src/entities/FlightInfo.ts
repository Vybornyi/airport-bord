export type Airline = {
  about: string;
  createdAt: number;
  icao: string;
  id: number;
  locale: string;
  logoName: string;
  logoSmallName: string;
  name: string;
  registrationTime: number;
  showOnSite: boolean;
  updatedAt: number;
};

export type AirlineInfo = {
  en: Airline;
  ru: Airline;
  ua: Airline;
};

export type AirportInfo = {
  IATA: string;
  city: string;
  city_en: string;
  city_ru: string;
  code: string;
  name: string;
  name_en: string;
};

export type FlightInfo = {
  ID: number;
  actual: string;
  airline: AirlineInfo;
  bagCount: number;
  bagWeigth: number;
  cargoCount: number;
  carrierID: {
    IATA: string;
    code: string;
  };
  codeShareData: [
    {
      airline: AirlineInfo;
      codeShare: string;
      icao: string;
      logo: string;
    },
  ];
  fltCatID: {
    code: string;
    name: string;
  };
  fltNo: string;
  fltTypeID: {
    code: string;
    name: string;
  };
  logo: string;
  mailCount: number;
  planeNo: string;
  planeTypeID: {
    IATA: string;
    code: string;
    name: string;
  };
  psgCount: number;
  showOnSite: number;
  standID: {
    code: string;
  };
  status: string;
  term: string;
  timeLandFact: string;
  timeTakeofFact: string;
  timeToStand: string;
};
