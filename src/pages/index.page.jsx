import { useRouter } from "next/router";

// Core
import { Box } from "@mui/material";
import { Button } from "@components";

function ManagementGeneralPage() {
  const router= useRouter();

  return (
    <Box>
      <Button
        onClick={() => router.push("/management")}
        variant="contained"
      >
        Navigeer naar management
      </Button>
    </Box>
  );
}

export default ManagementGeneralPage;