import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: MaplestoryOTFBold, serif;
  font-size: 1.5rem;
  margin: 10px;
  color: #e88ca6;
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-family: 양진체, serif;
  font-size: 1.2rem;
  margin: 10px;
  white-space: pre-line;
`;

export const Heading3 = styled.p`
  font-family: SUITE-Regular, serif;
  font-size: 1.2rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  font-family: MaplestoryOTFBold, serif;
  line-height: 1;
  margin: 5px; 
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  line-height: 2.2rem;
  white-space: pre-line;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-weight: 200;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
  margin: 3px;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid #5f5f5f;
  margin: 10px 0;
`;
