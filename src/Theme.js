import { createMuiTheme } from "@material-ui/core/styles";

const red = "#ff1466";
const blue = "#6a00f4";
const orange = "#ffb900";
const gray = "#818181";

export default createMuiTheme({
  palette: {
    common: {
      red: red,
      orange: orange,
      blue: blue,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: orange,
    },
  },
  typography: {
    tab: {
      fontSize: `1rem`,
      textTransform: `none`,
      color: `#fff`,
      fontFamily: "Robbot",
      fontWeight: "700",
    },
    estimate: {
      fontSize: `1rem`,
      textTransform: `none`,
      color: "#fff",
      borderRadius: `50px`,
    },
    h1: {
      fontFamily: "Robbot",
      fontWeight: 700,
      fontSize: "3.5rem",
      color: blue,
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: "Robbot",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: blue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Robbot",
      fontSize: "2.25rem",
      color: blue,
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Robbot",
      fontSize: "1.75rem",
      color: blue,
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Robbot",
      fontSize: "1rem",
      color: blue,
      fontWeight: 500,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: gray,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "#fff",
    },
    body1: {
      fontSize: "1.2rem",
      color: gray,
      fontWeight: 300,
      fontFamily: "Robbot",
    },
    learnButton: {
      borderColor: blue,
      color: blue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontSize: `1rem`,
      width: "145px",
      "&:hover": {
        color: "#fff",
        backgroundColor: blue,
      },
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: gray,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        fontSize: "0.9rem",
      },
    },
    MuiInput: {
      root: {
        color: gray,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `1.5px solid ${orange}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `1.5px solid ${orange}`,
        },
      },
    },
  },
});
