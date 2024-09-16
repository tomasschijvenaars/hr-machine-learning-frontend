import { useRouter } from "next/router";

// Core
import { Box } from "@mui/material";
import { Button } from "@components";

// Utils
import { HOME_PATH } from "@constants/path.const";
import { useAuth } from "@hooks";

function ManagementGeneralPage() {
  const router = useRouter();

  const { currentUser } = useAuth();

  return (
    <Box>
      <Button onClick={() => router.push(HOME_PATH)} variant="contained">
        Navigeer naar home
      </Button>

      {currentUser.first_name}
    </Box>
  );
}

export default ManagementGeneralPage;
