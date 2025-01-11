import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #f9f9f9; /* 기본 배경색 설정 */
  width: 100wh; /* 컨테이너가 전체 화면 너비를 차지하도록 설정 */
  padding: 20px; /* 내부 여백 추가 */
  margin: 0 auto; /* 가운데 정렬 */
  
  @media screen and (min-width: 480px) {
      width: 480px;
      padding: 40px; /* 큰 화면에서는 여백을 늘려서 더 보기 좋게 설정 */
  }
`;
export default Container;
