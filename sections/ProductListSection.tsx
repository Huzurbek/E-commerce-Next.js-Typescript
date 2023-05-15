"use client";

import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";
import { productList } from "@/dataList";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function ProductListSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Box sx={{ px: 2 }}>
        <Title text="Популярное" />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(304px, 1fr))",
            gap: "40px",
            boxSizing: "border-box",
          }}
        >
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
      {children}
      <Box sx={{ px: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(304px, 1fr))",
            gap: "40px",
            boxSizing: "border-box",
          }}
        >
          {productList.map((product, index) => {
            if (index <= 3) {
              return <ProductCard key={product.id} product={product} />;
            }
          })}
        </Box>
      </Box>
    </>
  );
}
