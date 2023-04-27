/** @jsxImportSource @emotion/react */

import { CalendarLink } from "@/components/organisms/CalendarLink";
import { DaySummary } from "@/components/organisms/DaySummary";
import { Calendar } from "@/types/cal";
import { fontTypes } from "@/utils/styles/font";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function Test() {
  const calledOnce = useRef(false);

  const [calendars, setCalendars] = useState<Calendar[]>([]);

  const fetchUpdate = async () => {
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/calendar/calendars`);
    //let date = new Date();
    //date.setDate(new Date().getDate() + 1);
    const calendars: Calendar[] = await (
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/calendar/calendars`)
    ).json();
    console.log("CALL:",calendars);
    
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

  const theme = useTheme();

  const handle = useFullScreenHandle();

  var randomColor = () => Math.floor(Math.random()*16777215).toString(16);
  

  const srcs = useMemo(() => 
    calendars.map(calendar =>`&src=${encodeURIComponent(calendar.id)}`).join("")
  , [calendars])
  const colors = useMemo(() => 
    calendars.map(calendar =>`&color=${encodeURIComponent("#"+randomColor())}`).join("")
  , [calendars])

  useEffect(() => {console.log(`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showNav=1&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=1&showTitle=0${srcs}${colors}`)}, [srcs])

 

  return (
    <Box height={"100%"}>
      <FullScreen handle={handle}>
        <Box display={"flex"}>
          <Box height="100vh" width={"60%"} bgcolor={"white"}>
            <iframe
              //src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showNav=1&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=1&showTitle=0&src=N2c4MmZidHNrMDk5NGo2N241azA5MmFtcThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=dTl1ZjQ3Yzlhb2kxZTJnaDI0Y2k4dWUxY2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NXRjZ2JndmlkYnNhMTlobm0wMjhuZTE3Y2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB&color=%23B39DDB&color=%238E24AA"
              src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&showNav=1&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=1&showTitle=0${srcs}${colors}`}
              width="100%"
              height={"100%"}
              scrolling="no"
              title="calendar"
            ></iframe>
          </Box>
          <Box width="40%" height={"100vh"} bgcolor={"white"}>
            <Button onClick={handle.enter}>FULL SCREEN</Button>
            <Container
              sx={{
                minHeight: "100vh",
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <DaySummary />
              <Typography css={fontTypes(theme).title} my={2}>
                カレンダーを追加
              </Typography>
              <CalendarLink />
            </Container>
          </Box>
        </Box>
      </FullScreen>
    </Box>
  );
}
