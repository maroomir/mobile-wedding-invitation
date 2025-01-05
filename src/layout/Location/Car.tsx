import styled from "@emotion/styled";
import data from 'data.json'
import { Heading2, PointTitle, Caption } from "@/components/Text";
import { IParkingInfo } from "@/types/data";

const Car = () => {
  const { name, parkingInfo } = data.locationInfo.carInfo;
  return (
    <CarWrapper>
      <Heading2>자가용</Heading2>
      <CarSection>
        <PointTitle>{name} 검색</PointTitle>
        {parkingInfo?.map((info: IParkingInfo, index: number) => {
            const { name, parkingTime, desc } = info;
            return (
              <Parking key={index}>
                <PointTitle>{name}</PointTitle>
                <Caption>{parkingTime}, {desc}</Caption>
              </Parking>
            );
        })}
      </CarSection>
    </CarWrapper>
  );
};

export default Car;

const CarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const CarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const Parking = styled.div`
  display: flex;
  flex-direction: column;
  text-indent: 10px;
  gap: 0px;
`;
