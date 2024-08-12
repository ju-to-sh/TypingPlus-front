import { FC, memo, useEffect, useRef, useState } from "react";
import allLocales from "@fullcalendar/core/locales-all";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import styled from "@emotion/styled";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { StudyRecord } from "../../../types/api/studyRecord";
import { TypingResultData } from "../../../types/api/typing";
import { QuizRecord } from "../../../types/api/quiz";

type Props = {
  typingResult: StudyRecord;
};

export const StudyCalendar: FC<Props> = memo((props) => {
  const { typingResult } = props;
  const width = useWindowSize();
  const calendarRef = useRef<FullCalendar>(null);
  const [key, setKey] = useState(0);

  const DateCount = (array: Array<string>) => {
    const count: any = {};

    array?.forEach((date: string) => {
      if (!count[date]) {
        count[date] = 0;
      }
      count[date]++;
    });
    return count;
  };

  const typingEvent = (data: Array<TypingResultData>) => {
    if (data?.length !== 0) {
      const event = data?.map((ele) => new Date(ele.attributes.created_at).toLocaleDateString("sv-SE"));
      return Object.keys(DateCount(event)).map((element) => ({ title: `タイピング${DateCount(event)[element]}回`, start: element, backgroundColor: "green", borderColor: "green" }));
    }
  };

  const quizEvent = (data: Array<QuizRecord>) => {
    if (data?.length !== 0) {
      const event = data?.map((ele) => new Date(ele.attributes.created_at).toLocaleDateString("sv-SE"));
      return Object.keys(DateCount(event)).map((element) => ({ title: `クイズ${DateCount(event)[element]}問`, start: element, backgroundColor: "#c52f24", borderColor: "#c52f24" }));
    }
  };

  const studyEvent = (typing: any, quiz: any) => {
    if (typing === undefined && quiz === undefined) {
      return [];
    } else if (typing === undefined && quiz?.length !== 0) {
      return quiz;
    } else if (typing?.length !== 0 && quiz === undefined) {
      return typing;
    } else {
      return quiz?.length && typing?.concat(quiz);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (calendarRef.current) {
        calendarRef.current.getApi().updateSize();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyleWrapper>
      {width < 700 ? (
        <FullCalendar
          ref={calendarRef}
          googleCalendarApiKey={process.env.REACT_APP_GOOGLE_CALENDAR_KEY}
          eventSources={[{ googleCalendarId: "japanese__ja@holiday.calendar.google.com", backgroundColor: "#ffeded", textColor: "#c52f24", borderColor: "#ffeded" }]}
          plugins={[dayGridPlugin, googleCalendarPlugin, listPlugin]}
          initialView="listDay"
          locales={allLocales}
          locale="ja"
          events={studyEvent(typingEvent(typingResult?.typing), quizEvent(typingResult?.quiz))}
          businessHours={{ daysOfWeek: [1, 2, 3, 4, 5] }}
          displayEventTime={false}
        />
      ) : (
        <FullCalendar
          key={key}
          ref={calendarRef}
          googleCalendarApiKey={process.env.REACT_APP_GOOGLE_CALENDAR_KEY}
          eventSources={[{ googleCalendarId: "japanese__ja@holiday.calendar.google.com", backgroundColor: "#ffeded", textColor: "#c52f24", borderColor: "#ffeded" }]}
          plugins={[dayGridPlugin, googleCalendarPlugin, listPlugin]}
          initialView="dayGridMonth"
          locales={allLocales}
          locale="ja"
          events={studyEvent(typingEvent(typingResult?.typing), quizEvent(typingResult?.quiz))}
          businessHours={{ daysOfWeek: [1, 2, 3, 4, 5] }}
          displayEventTime={false}
        />
      )}
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
  .fc .fc-col-header-cell {
    font-size: 0.75rem;
  }
  .fc-event-title {
    font-size: 0.75rem;
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
