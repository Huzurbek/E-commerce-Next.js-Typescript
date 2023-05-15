import Image from "next/image";
import { Box, Typography } from "@mui/material";

export function MiddleBanner() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#142840",
        height: 293,
        my: "65px",
        color: "white",
        position: "relative",
        display: "flex",
        alignItems: { xs: "start", md: "center" },
        justifyContent: { xs: "center", md: "start" },
        px: { xs: 0, md: "90px" },
      }}
    >
      <Box sx={{ zIndex: 500 }}>
        <Typography
          variant="h1"
          sx={{
            mb: { xs: "10px", md: "65px" },
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "3.25rem", md: "4rem" },
          }}
        >
          AirPords Pro{" "}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "20px", md: "40px" },
            textAlign: { xs: "center", md: "left" },
            lineHeight: "35px",
          }}
        >
          Успей приобрести всего за 2590 ₽
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", top: { xs: "70px", md: 0 }, right: 42 }}>
        <Image
          src={`/assets/img/airport.png`}
          width={590}
          height={354}
          alt="Picture of the author"
        />
      </Box>
    </Box>
  );
}
