"use client";
import ProductCard from "@/components/ProductCard";
import CatalogSection from "@/sections/CatalogSection";
import { MiddleBanner } from "@/sections/MiddleBanner";
import ProductListSection from "@/sections/ProductListSection";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: 1400,
        minWidth: 336,
        margin: "0 auto",
        // outline: "1px solid green",
      }}
    >
      <ProductListSection>
        <MiddleBanner />
      </ProductListSection>

      <CatalogSection />
    </Box>
  );
}
