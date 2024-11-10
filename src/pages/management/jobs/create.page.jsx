import { useRouter } from "next/router";

// Core
import { Box, Typography, Stack, useMediaQuery, useTheme } from "@mui/material";
import { JobForm } from "@forms";
import { Button } from "@components";

// Utils
import { JOBS_PATH } from "@constants/path.const";
import ManagementLayout from "src/layouts/management.layout";

function CreateJobPage() {
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ManagementLayout>
      <Box mb={4}>
        <Button variant="breadcrumbs" onClick={() => router.push(JOBS_PATH)}>Back</Button>
      </Box>

      <Typography variant="h4" gutterBottom>
        Maak een vacature aan
      </Typography>

      <Stack
        direction={isDesktop ? "row" : "column"}
        spacing={4}
        mt={2}
      >
        <Box flex={1} sx={{ maxWidth: isDesktop ? '50%' : '100%' }}>
          <Typography variant="body1" mb={2}>
            Hier kun je een nieuwe vacature aanmaken. Vul het formulier in met de relevante informatie:
          </Typography>
          <ul>
            <li>Naam: Vul de functietitel in</li>
            <li>Functie: Beschrijf de rol</li>
            <li>Jaren ervaring: Specificeer de vereiste ervaring</li>
            <li>Vaardigheden: Noem de belangrijkste vaardigheden</li>
            <li>Jaar salaris: Vermeld de salaris</li>
          </ul>
        </Box>

        {/* Rechter kolom: formulier */}
        <Box flex={1} sx={{ maxWidth: isDesktop ? '50%' : '100%' }}>
          <JobForm />
        </Box>
      </Stack>
    </ManagementLayout>
  );
}

export default CreateJobPage;
