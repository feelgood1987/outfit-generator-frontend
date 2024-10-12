"use client";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export type Gender = "ALL" | "MEN" | "WOMEN";

export const FilterPanel = ({
  onClick,
}: {
  onClick: (filter: Gender) => Promise<void>;
}) => {
  const [selectedState, setSelectedState] = useState<Gender>("ALL");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedState((event.target as HTMLInputElement).value as Gender);
    onClick(selectedState);
  };

  const handleClick = async () => {
    onClick(selectedState);
  };

  return (
    <Box sx={{ padding: 2 }} display="flex" flexDirection="column">
      <FormControl component="fieldset">
        <RadioGroup value={selectedState} onChange={handleChange}>
          <FormControlLabel
            value="ALL"
            control={<Radio checked={selectedState === "ALL"} />}
            label="Zufällig"
          />
          <FormControlLabel
            value="WOMEN"
            control={<Radio checked={selectedState === "WOMEN"} />}
            label="Damen"
          />
          <FormControlLabel
            value="MEN"
            control={<Radio checked={selectedState === "MEN"} />}
            label="Herren"
          />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ marginTop: 2 }}
      >
        Generieren
      </Button>
    </Box>
  );
};

export default FilterPanel;
