import { Box, SxProps, Theme, Typography } from "@mui/material";

interface IProductCard {
  sx?: SxProps<Theme>;
  image: string;
  text: string;
}
const NewsCard: React.FC<IProductCard> = ({ sx, image, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        backgroundImage: `url(/assets/img/${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxSizing: "border-box",
        // background:
        //   "linear-gradient(1.56deg, rgba(40, 40, 40, 0.71) 3.05%, rgba(30, 30, 30, 0) 55.29%)",
        minHeight: { xs: 200, sm: 248 },
        borderRadius: 5,
        height: "100%",
        flex: 1,
        p: 2,
        ...sx,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: "1rem",
          flex: 1,
          fontWeight: 600,
          lineHeight: "18px",
          color: "white",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
export default NewsCard;
