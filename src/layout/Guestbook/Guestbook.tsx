import styled from '@emotion/styled';
import CommentForm from './CommentForm.tsx';
import { Heading3 } from '@/components/Text.tsx';

const Guestbook = () => {
  return (
    <GuestBookWrapper>
      <Heading3>
        메시지를 남겨주시면 저희에게 전달됩니다.<br />여러분들이 남겨주신 축복에 감사드립니다.
      </Heading3>
      <CommentForm />
    </GuestBookWrapper>
  );
};

export default Guestbook;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
`;
