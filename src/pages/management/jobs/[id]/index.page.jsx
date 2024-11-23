import { useEffect, useState, React } from "react";
import { useRouter } from "next/router";

// Core
import { Box, Grid, Typography, Chip } from "@mui/material";
import { Button } from "@components";

// Utils
import { DefaultLayout } from "@layouts";
import { JOBS_PATH, SELECT_CV_PATH } from "@constants/path.const";

// Actions
import { getJob } from "@actions";

function ManagementJobPage() {
  const router = useRouter();
  const { id } = router.query;

  const [job, setJob] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const job = await getJob(id);
        setJob(job);
      } catch (error) {
        console.error("Error loading user:", error);
      }
    };

    getData();
  }, [id]);

  return (
    <DefaultLayout>
      <Box m={20}>
        <Button onClick={() => router.push(JOBS_PATH)}>Back</Button>

        <Box mt={2} mb={4}>
          <Typography variant="h4" gutterBottom>
            {job?.name}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {job?.function}
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {/* Years of Experience */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="bold">
              Years of Experience Required:
            </Typography>
            <Typography variant="body1">
              {job?.years_of_experience} years
            </Typography>
          </Grid>

          {/* Skills */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="bold">
              Required Skills:
            </Typography>
            <Box mt={1} display="flex" flexWrap="wrap" gap={1} sx={{width: "50vw"}}>
              {job?.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  color="primary"
                  variant="outlined"
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
          </Grid>

          {/* Yearly Salary */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="bold">
              Annual Salary:
            </Typography>
            <Typography variant="body1">
              ${job?.year_salary.toLocaleString()} per year
            </Typography>
          </Grid>

          Apply Button
          <Grid item xs={12} mt={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.push(SELECT_CV_PATH(id))}
            >
              Select CV
            </Button>
          </Grid>
        </Grid>
      </Box>
    </DefaultLayout>
  );
}

export default ManagementJobPage;
