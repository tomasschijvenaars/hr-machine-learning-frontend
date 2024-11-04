// Core
import { Box, Stack, Typography, useMediaQuery as muiUseMediaQuery} from "@mui/material";
import { UploadPdfForm } from "@forms";
import { AppBar } from "src/layouts/app_bar/index";
import DefaultLayout from "src/layouts/default.layout";
import { useTheme } from "@mui/material/styles";

function UploadPdfPage() {
  const theme = useTheme();
  const isMobile = muiUseMediaQuery(theme.breakpoints.down('md'));


  return (
    <DefaultLayout>
    <Stack
      style={{
        maxWidth: '1440px', 
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: "50px",
      }}
      direction={isMobile ? "column" : "row"}
      justifyContent={isMobile ? "center" : "null"}
      spacing={2}
    >
      <Stack flex={1} padding={5} maxWidth={isMobile ? "100%" : "40%"}>
        <Typography variant="h5">Upload CV</Typography>
        <Typography>Upload je cv en bekijk welke job geschikt is.</Typography>
      </Stack>
  
      <Stack flex={1} padding={5} maxWidth={isMobile ? "100%" : "40%"} justifyContent="start">
        <UploadPdfForm />
      </Stack>
    </Stack>
  </DefaultLayout>
  
  );
}

export default UploadPdfPage;
