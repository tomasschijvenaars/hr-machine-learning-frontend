import { useRouter } from "next/router";

// Core
import { Box, Typography } from "@mui/material";
import { JobForm } from "@forms";
import { Button } from "@components";

// Utils
import { JOBS_PATH } from "@constants/path.const";

function CreateJobPage() {
  const router = useRouter();

  return (
    <Box m={20}>
      <Box mt={2} mb={4}>
        <Button onClick={() => router.push(JOBS_PATH)}>Back</Button>

        <Typography variant="h4" gutterBottom>
          Create job
        </Typography>
      </Box>
      <JobForm />
    </Box>
  );
}

export default CreateJobPage;
