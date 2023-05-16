import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
interface IProps {
  title: string;
  description: string;
}
const SliderCard: React.FC<IProps> = ({ title, description }) => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: "460px",
          width: "100%",
          backgroundImage: `url(/assets/img/sliderbg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          borderRadius: "6px",
          overflow: "hidden",
          p: 2,
          position: "relative",
        }}
      >
        <Box sx={{ maxWidth: "500px", ml: 10, zIndex: 2 }}>
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontSize: "45px",
              fontWeight: 600,
              lineHeight: "35px",
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "white", fontSize: "22px", fontWeight: 500, mb: 4 }}
          >
            {description}
          </Typography>
          <Button variant="contained">Подробнее</Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            right: 2,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={`/assets/img/sliderpic1.png`}
            width={295}
            height={302}
            alt="Picture of the author"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SliderCard;
