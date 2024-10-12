import { Typography, Box } from "@mui/material";

export const Description = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Willkommen beim Outfit Generator
      </Typography>
      <Typography variant="body1">
        Unser Service hilft Ihnen, stilvolle Outfits basierend auf Ihren
        Vorlieben und aktuellen Modetrends zu erstellen. Egal, ob Sie nach
        Freizeitkleidung, Business-Outfits oder etwas für einen besonderen
        Anlass suchen, wir haben das Richtige für Sie. Geben Sie einfach Ihre
        Vorlieben ein und lassen Sie unseren Algorithmus den Rest erledigen!
      </Typography>
    </Box>
  );
};
