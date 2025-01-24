import styled from "@emotion/styled";
import { useState } from "react";
import { Heading3 } from "@/components/Text";

const Attendance = () => {
  const [yesCount, setYesCoount] = useState(0);
  const [noCount, setNoCount] = useState(0);

  const handleYesVote = () => {
    setYesCoount(yesCount + 1);
  };
  const handleNoVote = () => {
    setNoCount(noCount + 1);
  };

  return (
    <AttendanceWrapper>
      <Heading3>저희 결혼식에 </Heading3>
      <VoteWrapper>
        <VoteButton onClick={handleYesVote}>참석합니다({yesCount})</VoteButton>
        <VoteButton onClick={handleNoVote}>불찹합니다({noCount})</VoteButton>
      </VoteWrapper>
    </AttendanceWrapper>
  );
};

export default Attendance;

const AttendanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`

const VoteWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const VoteButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:nth-of-type(2) {
    background-color: #dc3545;

    &:hover {
      background-color: #a71d2a;
    }
  }
`;
