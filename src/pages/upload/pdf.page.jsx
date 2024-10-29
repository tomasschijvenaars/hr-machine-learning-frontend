// Core
import { Box, Stack } from "@mui/material";
import { UploadPdfForm } from "@forms";
import { AppBar } from "src/layouts/app_bar/index";
import DefaultLayout from "src/layouts/default.layout";

function UploadPdfPage() {
  return (
    <DefaultLayout>
      <Stack style={{
        width: '1440px',
        display: 'flex',
        justifyContent: 'center',
        marginTop: "100px",
        padding: '0 20px 0 20px'}}>
      <UploadPdfForm />
      </Stack>
    </DefaultLayout>
  );
}

export default UploadPdfPage;
