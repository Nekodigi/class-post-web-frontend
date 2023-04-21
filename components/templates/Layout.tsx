import { Box } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return <Box>{children}</Box>;
};
