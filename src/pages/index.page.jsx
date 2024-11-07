import { useRouter } from "next/router";

// Core
import { Grid } from "@mui/material";

// Utils
import { DefaultLayout } from "@layouts";
import { Headline, Content } from "@modules";

function ManagementGeneralPage() {
  const router = useRouter();

  return (
    <DefaultLayout>
      <Grid flexDirection="column" display="flex" width="100vw">
        <Grid>
          <Headline />
        </Grid>

        <Grid flexDirection="row" display="flex" mb={5}>
          <Content />
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}

export default ManagementGeneralPage;
