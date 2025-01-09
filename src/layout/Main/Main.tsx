import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/image163.jpeg';

const Main = () => {
  const { greeting } = data;

  return (
    <MainWrapper>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
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
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
