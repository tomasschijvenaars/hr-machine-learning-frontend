import { useRouter } from "next/router";

// Core
import { Box, Button, Typography, Stack,  useMediaQuery, useTheme  } from "@mui/material";
import { ProfileForm } from "@forms";
import { Persona } from "@modules";

// Actions
import { DefaultLayout } from "@layouts";
import ManagementLayout from "src/layouts/management.layout";

function ProfilePage() {
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ManagementLayout>
    <Stack
      direction={isDesktop ? "row" : "column"}
      spacing={4}
      mt={isDesktop ? 5 : 1}
    >
      <Box flex={1} sx={{ maxWidth: isDesktop ? '50%' : '100%' }}>
      <Typography variant="h4" gutterBottom>
      Upload je cv
      </Typography>
      <Typography mb={isDesktop ? 10 : 3}>Door je CV te uploaden, maak je de eerste stap naar het vinden van de perfecte baan veel gemakkelijker en efficiënter. Wacht niet langer, upload je CV en ontdek welke vacatures het beste bij jou passen!</Typography>
      <ProfileForm  />
      </Box>

      {/* Rechter kolom: formulier */}
      <Box flex={1} sx={{ maxWidth: isDesktop ? '50%' : '100%' }}>
      <Persona />
      </Box>
    </Stack>
  </ManagementLayout>
  );
}

export default ProfilePage;
