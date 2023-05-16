import CatalogCard from "@/components/CatalogCard";
import Title from "@/components/Title";
import { catalogList } from "@/dataList";
import { Box } from "@mui/material";

const CatalogSection = () => {
  return (
    <Box sx={{ px: 2 }}>
      <Title text="Каталог" />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(304px, 1fr))",
          gap: { xs: "15px", sm: "40px" },
          boxSizing: "border-box",
        }}
      >
        {catalogList.map((cat) => (
          <CatalogCard
            key={cat.id}
            title={cat.title}
            catalogList={cat.catalogList}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CatalogSection;
