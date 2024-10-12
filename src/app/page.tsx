import { Divider, Stack, SxProps } from "@mui/material";
import { Description, Outfits } from "./components";

export default async function Home() {
  const containerStyle: SxProps = {
    padding: 2,
    margin: "2rem",
  };

  return (
    <Stack sx={containerStyle} spacing="1rem">
      <Description />
      <Divider />
      <Outfits />
    </Stack>
  );
}
