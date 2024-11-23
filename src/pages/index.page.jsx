import { useRouter } from "next/router";

// Core
import { Grid } from "@mui/material";

// Utils
import { LOGIN_PATH } from "@constants/path.const";
import { Headline, Content } from "@modules";
import { DefaultLayout } from "@layouts";
import { useAuth } from "@hooks";

function ManagementGeneralPage() {
  const router = useRouter();
  const { currentUser } = useAuth();

  if (!currentUser) {
    router.push(LOGIN_PATH);
    return null;
  }

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
