import { useRouter } from "next/router";

// Core
import { Box } from "@mui/material";
import { Button } from "@components";

function ManagementGeneralPage() {
  const router= useRouter();

  return (
    <Box>
      <Button
        onClick={() => router.push("/")}
        variant="contained"
      >
        Navigeer naar home
      </Button>
    </Box>
  );
}

export default ManagementGeneralPage;