"use client";
import ProductCard from "@/components/ProductCard";
import CatalogSection from "@/sections/CatalogSection";
import HeaderSliderSection from "@/sections/HeaderSliderSection";
import { MiddleBanner } from "@/sections/MiddleBanner";
import NewsBlogSection from "@/sections/NewsBlogSection";
import ProductListSection from "@/sections/ProductListSection";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: 1400,
        minWidth: 336,
        margin: "0 auto",
      }}
    >
      <HeaderSliderSection />

      <ProductListSection>
        <MiddleBanner />
      </ProductListSection>

      <CatalogSection />

      <NewsBlogSection />
    </Box>
  );
}
