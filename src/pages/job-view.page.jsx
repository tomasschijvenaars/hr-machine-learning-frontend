import { useRouter } from "next/router";

// Core
import { Box, Typography } from "@mui/material";
import JobView from "@modules/job-view/job-view";
import { Button } from "@components";

// Utils
import { JOBS_PATH } from "@constants/path.const";
import DefaultLayout from "src/layouts/default.layout";


function CreateJobPage() {
  const router = useRouter();

  return (
    <DefaultLayout m={20}>
      <JobView />
    </DefaultLayout>
  );
}

export default CreateJobPage;
