import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Core
import { Grid, Box } from "@mui/material";

// Utils
import { JOB_PATH } from "@constants/path.const"
import { DefaultLayout } from "@layouts";
import { Job } from "@modules";

// Actions
import { getJobs } from "@actions";

function ManagementJobsPage() {
  const router = useRouter();

  const [jobs, setJobs] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const jobs = await getJobs();
        setJobs(jobs);
      } catch (error) {
        console.error("Error loading user:", error);
      }
    };

    getData();
  }, []);

  return (
    <DefaultLayout>
      <Box m={2}>
        <Grid container spacing={2}>
          {jobs?.map((job) => (
            <Grid key={job._id} item xs={12} md={4} direction="column">
              <Job job={job} onClick={() => router.push(JOB_PATH(job._id))} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </DefaultLayout>
  );
}

export default ManagementJobsPage;
