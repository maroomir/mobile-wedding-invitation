import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

// Google Calendar URL 생성 함수
const generateGoogleCalendarUrl = (event: {
  title: string;
  start: string;
  end: string;
  description: string;
  location?: string;
}) => {
  const baseUrl = 'https://www.google.com/calendar/render';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${event.start}/${event.end}`,
    details: event.description,
    location: event.location || '',
    sf: 'true',
    output: 'xml',
  });

  return `${baseUrl}?${params.toString()}`;
};

// iCalendar 파일 생성 함수
const generateICalFile = (event: {
  title: string;
  start: string;
  end: string;
  description: string;
  location?: string;
}) => {
  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${event.start}
DTEND:${event.end}
DESCRIPTION:${event.description}
LOCATION:${event.location || ''}
END:VEVENT
END:VCALENDAR
`.trim();

  // Blob 생성
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'event.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Invitation = () => {
  const { greeting } = data;

  // 이벤트 정보
  const event = {
    title: '윤철중, 김예슬의 결혼식',
    start: '20250412T055000Z', // UTC 시간 (2025년 4월 12일 14:50 KST)
    end: '20250412T075000Z',   // UTC 시간 (2025년 4월 12일 16:50 KST)
    description: '2층 파티움홀. 9호선 국회의사당역 3번 출구 (도보 5분). 5호선 여의나루역 1번 출구 (셔틀버스 운행). 주차 90분 무료',
    location: '더파티움 여의도',
  };

  const googleCalendarUrl = generateGoogleCalendarUrl(event);
  const handleIcalDownload = () => generateICalFile(event);

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <RoundButton
        target="_blank"
        href={googleCalendarUrl}
        rel="noreferrer">
        구글 캘린더 추가하기
      </RoundButton>
      <RoundButton onClick={handleIcalDownload}>
        애플 캘린더 추가하기
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
