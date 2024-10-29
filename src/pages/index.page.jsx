import { useRouter } from "next/router";

// Core
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Button } from "@components";

// Utils
import { MANAGEMENT_GENERAL_PATH } from "@constants/path.const";
import { DefaultLayout } from "@layouts";
import Headline from "src/modules/headline/headline";

function ManagementGeneralPage() {
  const router = useRouter();

  return (
    <DefaultLayout>
      <Headline />
  </DefaultLayout>
  
  );
}

export default ManagementGeneralPage;
