import styled from "@emotion/styled";
import data from 'data.json'
import { ISubwayStopInfo } from "@/types/data";
import { Caption, Heading2 } from "@/components/Text";

const getColorByType = (type: string) => { 
  switch (type) {
    case '5':
      return '#996CAC';
    case '9':
      return '#BB8336';
    default:
      return 'gray';
  }
}

const Subway = () => {
  const { subwayStopInfo } = data.locationInfo;

  return (
    <SubwayWrapper>
      <Heading2>지하철</Heading2>
      {subwayStopInfo?.map((item: ISubwayStopInfo, index: number) => {
        const { name, lineNumber, exits } = item;
        return (
          <SubwayStop>
            {exits?.map((exit: string) => (
              <SubwayStopExitComponent
                key={index}
                name={name}
                lines={lineNumber}
                exit={exit} />
            ))}
          </SubwayStop>
        )
      })}
    </SubwayWrapper>
  )
};

const SubwayStopExitComponent = ( {name, lines, exit} : { name: string; lines: string[], exit: string} ) => {
  return (
    <SubwayList>
      {lines?.map((line: string) => {
        return (
          <SubwayLineNumber color={getColorByType(line)}>
            {line}
          </SubwayLineNumber>
        );
      })}
      <Caption textAlign={'left'}>{name} {exit}</Caption>
    </SubwayList>
  );
}

export default Subway;

const SubwayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const SubwayStop = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const SubwayList = styled.div`
  display: flex;
  flex-shrink: 0; /* 줄바꿈 비허용 */
  gap: 1px; /* 아이템 간격 */
  align-items: center; /* 내부 요소 수직 정렬 */
`;

const SubwayLineNumber = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  color: white;
  font-weight: bold;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
`;
