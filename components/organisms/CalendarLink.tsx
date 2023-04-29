/** @jsxImportSource @emotion/react */

import { useEffect, useRef, useState } from "react";
import { Calendar } from "../../types/cal";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { fontTypes } from "../../utils/styles/font";
import QRCode from "react-qr-code";

export const CalendarLink = () => {
  const theme = useTheme();

  const calledOnce = useRef(false);

  const [calendars, setCalendars] = useState<Calendar[]>([]);

  const fetchUpdate = async () => {
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/calendar/calendars`);
    //let date = new Date();
    //date.setDate(new Date().getDate() + 1);
    const calendars: Calendar[] = await (
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/calendar/calendars`)
    ).json();
    console.log(calendars);
    setCalendars(calendars);
    //setIndicator(indicator);
  };

  useEffect(() => {
    if (calledOnce.current) return;
    calledOnce.current = true;
    fetchUpdate();
    setInterval(fetchUpdate, 600 * 1000);
    //return;
  }, []);

  return (
    <Stack gap={2} mb={2} direction={"row"} justifyContent={"center"}>
      {calendars.map((calendar, i) => (
        <Box key={i}>
          <Typography css={fontTypes(theme).body}>
            {calendar.summary}
          </Typography>
          <a
            href={`
            https://calendar.google.com/calendar/u/0/r?cid=${calendar.id}`}
          >
            <QRCode
              style={{ width: "70px", height: "70px" }}
              fgColor="#888888"
              value={`
            https://calendar.google.com/calendar/u/0/r?cid=${calendar.id}`}
            />
          </a>
        </Box>
      ))}
    </Stack>
  );
};
