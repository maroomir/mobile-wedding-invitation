import styled from '@emotion/styled';
import data from 'data.json'
import Calendar from "react-calendar";
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = () => {
  const { greeting } = data;

  const eventDate = new Date(greeting.eventDate);
  const isEventDate = (date: Date) => eventDate.toDateString() === date.toDateString();
  return (
    <CalendarWrapper>
      <StyledCalendar
        formatDay={(_, date) => moment(date).format('DD')} // 날짜 형식 커스터마이징
        tileClassName={({ date, view }) => {
          if (view === 'month' && isEventDate(date)) {
            return 'event-day';
          }
          return '';
        }}
      />
    </CalendarWrapper>
  );
}

export default EventCalendar;

const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: SUITE-Regular, sans-serif;
`;

const StyledCalendar = styled(Calendar)`
  border: none;
  background-color: #f9f9f9;
  border-radius: 10px; /* 모서리를 둥글게 */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
  width: 100%;
  max-width: 400px;

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e88ca6; /* 헤더 색상 */
    color: white;
    border-radius: 10px 10px 0 0;
    padding: 25px;
  }

  .react-calendar__navigation__label {
    font-size: 1rem;
    font-weight: bold;
  }

  .react-calendar__month-view__weekdays {
    font-size: 1rem;
    color: #777;
  }

  .react-calendar__tile {
    text-align: center;
    padding: 10px;
    font-family: MaplestoryOTFBold, sans-serif;
    font-size: 1.2rem;
    background-color: transparent;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ff6b6b; /* 날짜 hover 효과 */
      color: white;
    }
  }

  .react-calendar__tile--active {
    background-color: #cccccc !important; /* 선택된 날짜 색상 */
    color: black !important;
    border-radius: 30%; /* 원형으로 유지 */
  }

  .react-calendar__tile--now {
    background-color: #4caf50 !important; /* 오늘 날짜 색상 */
    color: white !important;
    border-radius: 30%; /* 원형으로 유지 */
  }

  .event-day {
    background-color: #e88ca6 !important; /* 이벤트 날짜 색상 */
    color: white !important;
    border-radius: 30%; /* 이벤트 날짜 둥글게 */
  }
`;
