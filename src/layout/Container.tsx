import styled from '@emotion/styled';

const Container = styled.div`
  border: 30px solid transparent; /* 테두리의 초기 값 설정 */
  border-image-source: url('/background.jpg'); /* 이미지 경로 설정 */
  border-image-slice: 30% 49%; /* 이미지의 크기 설정 */
  border-image-width: 60px; /* 테두리 이미지의 너비 설정 */
  background-color: #f9f9f9;
  width: 100vw;
  margin: 0 auto;
  
  @media screen and (min-width: 600px) {
      width: 600px;
  }
`;
export default Container;
