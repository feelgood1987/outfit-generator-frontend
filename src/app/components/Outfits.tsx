"use client";
import { Stack } from "@mui/material";
import FilterPanel, { Gender } from "./FilterPanel";
import { getRandomOutfitAsync } from "../apis/api";
import { useEffect, useState } from "react";
import Product from "./Product";

export type OutfitItem = {
  id: string;
  brand: string;
  descriptions: { language: string; description: string }[];
  variants: {
    id: string;
    images: { key: string; type: string }[];
    current_price: number;
    sizes: {
      bar_code: string;
      size_name: string;
      size_value: string;
    }[];
  }[];
};
export const Outfits = () => {
  const [outfit, setOutfit] = useState<{
    accessoire: OutfitItem;
    oberbekleidung: OutfitItem;
    unterbekleidung: OutfitItem;
  }>();

  useEffect(() => {
    getOutfitsAsync("ALL");
  }, []);

  const getOutfitsAsync = async (filter: Gender) => {
    const data = await getRandomOutfitAsync(filter);
    setOutfit(data);
  };
  const handleClick = async (filter: Gender) => {
    console.log("filter", filter);
    await getOutfitsAsync(filter);
  };

  return (
    <Stack spacing={2} direction={{ sm: "row" }}>
      <FilterPanel onClick={handleClick} />
      {outfit && (
        <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
          {outfit.oberbekleidung?.variants && (
            <Product
              outfitType="Oberbekleidung"
              product={outfit.oberbekleidung}
            />
          )}
          {outfit.unterbekleidung?.variants && (
            <Product
              outfitType="Unterbekleidung"
              product={outfit.unterbekleidung}
            />
          )}
          {outfit.accessoire?.variants && (
            <Product outfitType="Accessoire" product={outfit.accessoire} />
          )}
        </Stack>
      )}
    </Stack>
  );
};
