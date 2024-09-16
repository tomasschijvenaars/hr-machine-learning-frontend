import { useRouter } from "next/router";

// Core
import { Box } from "@mui/material";
import { Button } from "@components";

// Utils
import { MANAGEMENT_GENERAL_PATH } from "@constants/path.const";

function ManagementGeneralPage() {
  const router = useRouter();

  return (
    <Box>
      <Button
        onClick={() => router.push(MANAGEMENT_GENERAL_PATH)}
        variant="contained"
      >
        Navigeer naar management
      </Button>
    </Box>
  );
}

export default ManagementGeneralPage;
