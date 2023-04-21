/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { fontFamilies, fontTypes } from "../../utils/styles/font";
import { Event } from "../../types/event";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { displayDay, formatDate } from "@/utils/funcs/date";

export const DaySummary = () => {
  const calledOnce = useRef(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [date, setDate] = React.useState<Dayjs | null>(dayjs());
  //* https://calendar.google.com/calendar/embed?src=7g82fbtsk0994j67n5k092amq8%40group.calendar.google.com&ctz=Asia%2FTokyo

  const theme = useTheme();

  const fetchUpdate = async () => {
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/calendar/day`);
    //let date = new Date();
    //date.setDate(new Date().getDate() + 1);
    if (date) console.log(formatDate(date.toDate()));
    const events: Event[] = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/calendar/day${
          date ? "?date=" + formatDate(date.toDate()) : undefined
        }`
      )
    ).json();
    console.log(events);
    setEvents(events);
    //setIndicator(indicator);
  };

  useEffect(() => {
    if (calledOnce.current) return;
    calledOnce.current = true;
    fetchUpdate();
    //setInterval(fetchUpdate, 60 * 1000);
    //return;
  }, []);

  useEffect(() => {
    fetchUpdate();
  }, [date]);

  return (
    <Box>
      <Typography css={fontTypes(theme).title} my={2}>
        {date
          ? dayjs().isSame(date, "day")
            ? "今日"
            : displayDay(date.toDate())
          : ""}
        のイベント
      </Typography>
      <Stack gap={2} mb={2}>
        {events.map((event, i) => (
          <Typography key={i} css={fontTypes(theme).subtitle}>
            {event.eventType}:{event.summary}
          </Typography>
        ))}
      </Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={date}
          onChange={(d) => {
            setDate(d);
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};
