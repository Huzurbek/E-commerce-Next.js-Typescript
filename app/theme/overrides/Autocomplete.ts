import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          marginTop: 8,
          boxShadow: theme.customShadows.dropdown,
        },
        listbox: {
          padding: theme.spacing(0, 1),
          "& .MuiAutocomplete-option": {
            padding: theme.spacing(1),
            fontSize: "14px",
            borderRadius: theme.shape.borderRadius,
            "&:first-of-type": {
              marginTop: theme.spacing(1),
            },
            "&:last-of-type": {
              marginBottom: theme.spacing(1),
            },
          },
        },
      },
    },
  };
}
