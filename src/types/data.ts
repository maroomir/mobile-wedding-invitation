export interface IData {
  emojis: string[];
  greeting: IGreeting;
  hostInfo: IHostInfo[];
  locationInfo: ILocationInfo[];
  mapInfo: IMapInfo;
}

export interface IGreeting {
  mainImg: string;
  title: string;
  date: string;
  message: string;
  host: {
    groom: {
      name: string;
      relation: string;
      parents: Parent;
    };
    bride: {
      name: string;
      relation: string;
      parents: Parent;
    };
  };
  eventDetail: string;
}

export interface BrideAndGroom {
  name: string;
  relation: string;
  parents: Parent;
}

type Parent = { relation: string; isDeceased?: boolean; name: string }[];

export interface IHostInfo {
  host: string;
  accountInfo: { name: string; relation: string; bank: string; account: string }[];
}

export interface IMapInfo {
  address1: string;
  address2: string;
  naverMap: string;
  kakaoMap: string;
  lat: number;
  lon: number;
}

export interface ILocationInfo {
  carInfo: ICarInfo;
  subwayStopInfo: ISubwayStopInfo [];
  busStopInfo: IBusStopInfo [];
}

export interface ICarInfo {
  name: string;
  parkingInfo: IParkingInfo [];
}

export interface IParkingInfo { name: string; parkingTime: string; desc: string;}

export interface ISubwayStopInfo {
  name: string;
  lineNumber: string [];
  exits: string [];
}

export interface IBusStopInfo {
  name: string;
  busInfo: IBusInfo [];
}

export interface IBusInfo { number: string; type: string };
