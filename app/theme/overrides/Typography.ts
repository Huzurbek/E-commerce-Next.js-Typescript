import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Typography(theme: Theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        },
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
