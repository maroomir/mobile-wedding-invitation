import styled  from "@emotion/styled";
import data from 'data.json'
import { IBusInfo, IBusStopInfo } from "@/types/data";
import { Heading2, PointTitle } from "@/components/Text";

const getColorByType = (type: string) => {
  switch (type) {
    case '광역버스':
      return 'red';
    case '공항버스':
      return 'red'
    case '좌석버스':
      return 'red';
    case '간선버스':
      return 'blue';
    case '지선버스':
      return 'green';
    case '마을버스':
      return 'green';
    default:
      return 'gray';
  }
}

const Bus = () => {
  const { busStopInfo } = data.locationInfo;

  return (
    <BusWrapper>
      <Heading2>버스</Heading2>
      {busStopInfo?.map((item: IBusStopInfo, index: number) => {
        const { name, busInfo } = item;
        return (
          <BusStopComponent
            key={index} 
            name={name} 
            buses={busInfo} />
        );
      })}
    </BusWrapper>
  )
};

const BusStopComponent = ( {name, buses}: { name: string; buses: IBusInfo[]} ) => {
  return (
    <BusStop>
      <PointTitle>{name}</PointTitle>
      <BusList>
        {buses?.map((bus: IBusInfo, busIndex) => {
          const { number, type } = bus;
          return (
            <BusNumber key={busIndex} color={getColorByType(type)}>
              {number}
            </BusNumber>
          );
        })}
      </BusList>
    </BusStop>
  );
}

export default Bus;

const BusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 10px;
`;

const BusStop = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const BusList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 줄 바꿈 허용 */
  gap: 10px; /* 아이템 간격 */
`;

const BusNumber = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  width: 60px;
  height: 25px;
  text-align: center;
`;
