import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function ControlLabel(theme: Theme) {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "14px",
          ...theme.typography.body2,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: theme.spacing(1),
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: theme.palette.text.disabled,
        },
      },
    },
  };
}
