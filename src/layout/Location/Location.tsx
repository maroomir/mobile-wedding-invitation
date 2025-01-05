import styled from '@emotion/styled';
import data from 'data.json';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import Car from './Car.tsx';
import Bus from './Bus.tsx';
import Subway from './Subway.tsx';
import { Caption, PointTitle, Hr } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <Map />
      <MapButtons />
      <Car />
      <Hr />
      <Bus />
      <Hr />
      <Subway />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
