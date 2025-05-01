import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/image205.jpg';
import mainVideo from '@/assets/video/prewedding.mp4';
import DDay from './DDay';
import Video from './Video';

const Main = () => {
  const { greeting } = data;

  return (
    <MainWrapper>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <DDay eventDate={greeting.eventDate} />
      <br />
      <Video videoFile={mainVideo} />
      <br />
    </MainWrapper>
  );
};

export default Main;

// 스타일링
const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const MainImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5%;
`;

const MainTitle = styled.p`
  font-family: MaplestoryOTFBold, serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;
