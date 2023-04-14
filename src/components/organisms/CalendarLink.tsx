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
    console.log(`${process.env.REACT_APP_API_URL}/calendar/calendars`);
    //let date = new Date();
    //date.setDate(new Date().getDate() + 1);
    const calendars: Calendar[] = await (
      await fetch(`${process.env.REACT_APP_API_URL}/calendar/calendars`)
    ).json();
    console.log(calendars);
    setCalendars(calendars);
    //setIndicator(indicator);
  };

  useEffect(() => {
    if (calledOnce.current) return;
    calledOnce.current = true;
    fetchUpdate();
    //setInterval(fetchUpdate, 60 * 1000);
    //return;
  }, []);

  return (
    <Stack gap={2} mb={2} direction={"row"} justifyContent={"center"}>
      {calendars.map((calendar) => (
        <Box>
          <Typography css={fontTypes(theme).body}>
            {calendar.summary}
          </Typography>
          <QRCode
            style={{ width: "100px", height: "100px" }}
            value={`
            https://calendar.google.com/calendar/u/0/r?cid=${calendar.id}
            @group.calendar.google.com`}
          />
        </Box>
      ))}
    </Stack>
  );
};
