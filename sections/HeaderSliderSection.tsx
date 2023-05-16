import { Box, Typography } from "@mui/material";
import GliderComponent from "react-glider";
import "glider-js/glider.min.css";
import SliderCard from "@/components/SliderCard";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const HeaderSliderSection: React.FC = () => {
  const sliderList = [
    {
      id: "42342",
      title: "Большой выбор стиральных машин",
      description: "Успей купить по суперцене",
    },
    {
      id: "42342",
      title: "Большой выбор стиральных машин",
      description: "Успей купить по суперцене",
    },
    {
      id: "42342",
      title: "Большой выбор стиральных машин",
      description: "Успей купить по суперцене",
    },
  ];
  return (
    <Box sx={{ px: 2, mt: 4 }}>
      <GliderComponent
        draggable
        duration={0.25}
        hasDots
        scrollToSlide={3}
        slidesToShow={1}
        scrollLock
        hasArrows
        iconLeft={
          <ArrowBackIosNewOutlinedIcon
            color="primary"
            fontSize="large"
            sx={{ ml: "-5px", mt: 7 }}
          />
        }
        iconRight={
          <ArrowForwardIosOutlinedIcon
            color="primary"
            fontSize="large"
            sx={{ mr: "-5px", mt: 7 }}
          />
        }
      >
        {sliderList.map((el) => (
          <SliderCard
            key={el.id}
            title={el.title}
            description={el.description}
          />
        ))}
      </GliderComponent>
    </Box>
  );
};

export default HeaderSliderSection;
