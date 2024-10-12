import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { IMAGE_BASE_URL } from "../constants";
import { OutfitItem } from "./Outfits";

export type ProductProps = {
  outfitType: "Accessoire" | "Oberbekleidung" | "Unterbekleidung";
  product: OutfitItem;
};

const Product = ({ outfitType, product }: ProductProps) => {
  const randomVariant =
    product.variants[Math.floor(Math.random() * product.variants.length)];

  return (
    <Box
      sx={{
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
        {outfitType}
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center", marginTop: 1 }}>
        {product.descriptions.find((des) => des.language === "DE")?.description}
      </Typography>
      <Typography
        variant="body2"
        component="p"
        sx={{ textAlign: "center", marginTop: 1 }}
      >
        sizes: {randomVariant.sizes.map((size) => size.size_name).join(", ")}
      </Typography>
      <Typography
        variant="body2"
        component="p"
        sx={{ textAlign: "center", marginTop: 1, marginBottom: 1 }}
      >
        price:{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {" "}
          {randomVariant.current_price} €{" "}
        </span>
      </Typography>

      <Box
        width={200}
        height={300}
        sx={{
          alignSelf: "center",
          margin: "auto",
          display: "flex",
          padding: 0,
          justifyContent: "center",
          border: "1px solid black",
          borderRadius: "4px",
        }}
      >
        <Image
          alt={product.brand}
          key={randomVariant.images[0].key}
          src={`${IMAGE_BASE_URL}${randomVariant.images[0].key}`}
          width={200}
          height={300}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default Product;
