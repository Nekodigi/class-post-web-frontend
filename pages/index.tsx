/** @jsxImportSource @emotion/react */

import { Inter } from "next/font/google";
import { Container, Typography, useTheme } from "@mui/material";
import { DaySummary } from "@/components/organisms/DaySummary";
import { fontTypes } from "@/utils/styles/font";
import { CalendarLink } from "@/components/organisms/CalendarLink";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const theme = useTheme();

  return (
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
  );
}
