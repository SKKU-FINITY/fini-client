import { globalStyle, style } from "@vanilla-extract/css";

globalStyle(":root", {
  vars: {
    "--min-width": "375px",
    "--max-width": "430px",
    "--height": "100dvh",
  },
});

globalStyle("html, body", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "0",
  padding: "0",
  fontSize: "62.5%",
  scrollbarWidth: "none",
  scrollBehavior: "smooth",
  fontFamily: `'SUIT Variable', sans-serif`,
  minHeight: "var(--height)",
});

globalStyle("::-webkit-scrollbar", {
  display: "none",
});

export const rootStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  margin: "0 auto",
  minHeight: "100dvh",
  minWidth: "var(--min-width)",
  maxWidth: "var(--max-width)",
  boxShadow: "0 0 20px rgba(0, 0, 0, 0.08)",
});

export const noRootShadow = style([
  rootStyle,
  {
    boxShadow: "none",
  },
]);
