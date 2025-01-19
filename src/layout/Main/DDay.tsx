import { useState, useEffect } from "react";
import styled from "@emotion/styled";

const calculateDday = (eventDate: string): number => {
  const today = new Date();
  const eventDay = new Date(eventDate);

  const diffInTime = eventDay.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

  return diffInDays;
}

const DDay = ({ eventDate }: { eventDate: string }) => {
  const [dday, setDday] = useState<number>(0);

  useEffect(() => {
    const updateDday = () => {
      const daysLeft = calculateDday(eventDate);
      setDday(daysLeft);
    };

    updateDday();

    const interval = setInterval(updateDday, 1000 * 60 * 60 * 24); // 1 day
    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <Wrapper>
      <DDayText>{dday > 0 ? `D-${dday}` : dday === 0 ? 'D-Day' : `D+${Math.abs(dday)}`}</DDayText>
    </Wrapper>
  )
}

export default DDay;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const DDayText = styled.div`
  font-family: TmonMonsori, serif;
  font-size: 3.6rem;
  background: linear-gradient(to bottom, #1d2359, #000002);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
`;
