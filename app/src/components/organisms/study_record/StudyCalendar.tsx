import { FC, memo } from "react";
import allLocales from "@fullcalendar/core/locales-all";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import styled from "@emotion/styled";

export const StudyCalendar: FC = memo(() => {
  const eventExample = [
    {
      title: "温泉旅行",
      start: "2024-08-05T09:10:00",
      description: "友達と温泉旅行",
      backgroundColor: "green",
      borderColor: "green",
    },
    {
      title: "期末テスト",
      start: new Date().setDate(new Date().getDate() + 5),
      description: "2年最後の期末テスト",
      backgroundColor: "blue",
      borderColor: "blue",
    },
  ];

  return (
    <StyleWrapper>
      <FullCalendar
        googleCalendarApiKey={process.env.REACT_APP_GOOGLE_CALENDAR_KEY}
        eventSources={[{ googleCalendarId: "japanese__ja@holiday.calendar.google.com", backgroundColor: "#ffeded", textColor: "#c52f24", borderColor: "#ffeded" }]}
        plugins={[dayGridPlugin, googleCalendarPlugin, listPlugin]}
        initialView="listDay"
        locales={allLocales}
        locale="ja"
        events={eventExample}
        businessHours={{ daysOfWeek: [1, 2, 3, 4, 5] }}
      />
    </StyleWrapper>
  );
});

const StyleWrapper = styled.div`
  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 8px;
  }
  .fc .fc-toolbar-title {
    font-size: 1rem;
    color: #333;
  }
  .fc .fc-button-primary {
    font-size: 0.75rem;
    background-color: #ffffff00;
    color: #acaba9;
    border: none;
    outline: none;
  }
  .fc .fc-today-button {
    background-color: #ffffff00;
    color: #37362f;
    border: 1px solid #acaba9;
    outline: none;
  }
  .fc .fc-button-primary:not(:disabled):active,
  .fc .fc-button-primary:not(:disabled).fc-button-active {
    background-color: #ffffff00;
    color: #acaba9;
    box-shadow: none;
  }
  .fc .fc-button-primary:not(:disabled):focus,
  .fc .fc-button-primary:not(:disabled).fc-button-focus {
    background-color: #ffffff00;
    color: #acaba9;
    box-shadow: none;
  }
  .fc .fc-today-button:disabled {
    opacity: 1;
  }
  .fc-daygrid-day-number {
    font-size: 0.75rem;
  }
`;
