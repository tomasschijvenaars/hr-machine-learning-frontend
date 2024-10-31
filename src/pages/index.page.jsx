import { useRouter } from "next/router";

// Core
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Button } from "@components";

// Utils
import { MANAGEMENT_GENERAL_PATH } from "@constants/path.const";
import { DefaultLayout } from "@layouts";
import Headline from "src/modules/headline/headline";
import Content from "src/modules/content/content";

function ManagementGeneralPage() {
  const router = useRouter();

  return (
    <DefaultLayout>
      <Grid flexDirection="column" display="flex" width="100vw">
        <Grid >  
          <Headline />
        </Grid>

        <Grid flexDirection="row" display="flex" mb={5}>  
          <Content/>
        </Grid>
      </Grid>
  </DefaultLayout>
  
  );
}

export default ManagementGeneralPage;
