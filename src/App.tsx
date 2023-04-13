/** @jsxImportSource @emotion/react */

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DaySummary } from "./components/templates/DaySummary";
import { Container, Typography, useTheme } from "@mui/material";
import { CalendarLink } from "./components/organisms/CalendarLink";
import { fontTypes } from "./utils/styles/font";

function App() {
  const theme = useTheme();

  return (
    <div className="App">
      <Container sx={{ minHeight: "100vh", p: 2 }}>
        <DaySummary />
        <Typography css={fontTypes(theme).title} my={2}>
          カレンダーを追加
        </Typography>
        <CalendarLink />
      </Container>
    </div>
  );
}

export default App;
