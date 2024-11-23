import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Core
import { Grid, Box } from "@mui/material";
import { Button } from "@components";

// Utils
import { JOB_PATH, CREATE_JOB_PATH } from "@constants/path.const"
import { DefaultLayout } from "@layouts";
import { useAuth } from "@hooks";
import { Job } from "@modules";

// Actions
import { getJobs } from "@actions";

function ManagementJobsPage() {
  const router = useRouter();

  const { currentUser } = useAuth();

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
      {currentUser.is_super_admin && (
        <Button onClick={() => router.push(CREATE_JOB_PATH)}>Create</Button>
      )}

        <Grid container spacing={2} mt={2}>
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
