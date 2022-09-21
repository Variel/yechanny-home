import React from "react";
import { css } from "@emotion/react";

export function Layout({ children }) {
  return <div css={css`background: #aecaff;`}>
    {children}
  </div>
}