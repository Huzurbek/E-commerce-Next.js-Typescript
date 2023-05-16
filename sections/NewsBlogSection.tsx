import NewsCard from "@/components/NewsCard";
import Title from "@/components/Title";
import { Box } from "@mui/material";

const NewsBlogSection = () => {
  const newsBlogList = [
    {
      id: "2324",
      image: "news2.png",
      text: "Как выбрать снегоуборщик",
      horizontal: false,
      vertical: true,
    },
    {
      id: "23",
      image: "news2.png",
      text: "Как выбрать снегоуборщик",
      horizontal: false,
      vertical: false,
    },
    {
      id: "342",
      image: "news3.png",
      text: "Как выбрать стиральную машину",
      horizontal: true,
      vertical: false,
    },
    {
      id: "234",
      image: "news4.png",
      text: "Самая дорогая видеоигра в мире Cyberpunk 2077 для TV Samsung 4K QLED",
      horizontal: false,
      vertical: false,
    },
    {
      id: "234",
      image: "news5.png",
      text: "PlayStation 5: захватывающее обновление, на которое мы надеялись",
      horizontal: false,
      vertical: false,
    },
    {
      id: "2342",
      image: "news6.png",
      text: "Путеводитель по покупкам: стоит ли покупать ноутбук или настольный компьютер?",
      horizontal: false,
      vertical: false,
    },
  ];
  return (
    <Box sx={{ px: 2 }}>
      <Title text="Новости и обзоры" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(auto-fit, minmax(250px, 1fr))",
            sm: "repeat(auto-fit, minmax(326px, 1fr))",
          },
          gap: "19px",
          boxSizing: "border-box",
        }}
      >
        {newsBlogList.map((el) => (
          <NewsCard
            key={el.id}
            sx={{
              gridColumn: el.horizontal
                ? { xs: "span 1", lg: "span 2" }
                : "span 1",
              gridRow: el.vertical ? "span 2" : "span 1",
              height: el.vertical ? { xs: 420, sm: 516 } : "100%",
            }}
            image={el.image}
            text={el.text}
          />
        ))}
      </Box>
    </Box>
  );
};

export default NewsBlogSection;
