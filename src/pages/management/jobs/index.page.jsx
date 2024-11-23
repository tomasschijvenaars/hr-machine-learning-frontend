import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Core
import { Grid, Box, Stack, useMediaQuery, Typography, Paper } from "@mui/material";
import { Button } from "@components";
import JobView from "@modules/jobview/jobview";

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
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const isDesktop = useMediaQuery("(min-width: 900px)");

  useEffect(() => {
    const getData = async () => {
      try {
        const jobs = await getJobs();
        setJobs(jobs);
        if (jobs.length > 0) {
          setSelectedJob(jobs[0]);
        }
      } catch (error) {
        console.error("Error loading jobs:", error);
      }
    };

    getData();
  }, []);

  return (
    <DefaultLayout m={20}>
    <Stack
      direction={isDesktop ? "row" : "column"}
      spacing={4}
      p={3}
      maxWidth={1480}
      mx="auto"
      justifyContent="center"
    >
      <Stack
        spacing={2}
        maxWidth={isDesktop ? "400px" : "100%"}
        width={isDesktop ? "250px" : "100%"}
        height={isDesktop ? "700px" : "auto"}
        overflow="auto"
      >
        {jobs.map((job) => (
          <Paper
            key={job.id}
            elevation={2}
            onClick={() => setSelectedJob(job)}
            sx={{
              p: 2,
              cursor: "pointer",
              bgcolor: "white",
              border:  "1px solid transparent",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {job.name}
            </Typography>
            <Box mt={1} mb={1}>
              <Typography variant="body2" color="textSecondary">
                Yearly Salary: €{job.year_salary.toLocaleString()}
              </Typography>
            </Box>
            <Typography variant="body2">
              Skills: {job.skills.join(", ")}
            </Typography>
          </Paper>
        ))}
      </Stack>

      <Box
        width={{ xs: "100%", md: "300px" }}
        minHeight={{ xs: "400px", md: "700px" }}
        bgcolor="grey.100"
        borderRadius={2}
        mt={isDesktop ? 0 : 2}
      >
        {selectedJob ? (
          <JobView job={selectedJob} />
        ) : (
          <Typography variant="body1">Geen job geselecteerd</Typography>
        )}
      </Box>
    </Stack>
  </DefaultLayout>
  );
}

export default ManagementJobsPage;
