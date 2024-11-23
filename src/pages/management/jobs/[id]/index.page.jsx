import { useEffect, useState, React } from "react";
import { useRouter } from "next/router";

// Core
import { Box, Grid, Typography, Chip } from "@mui/material";
import { Button } from "@components";

// Utils
import { JOBS_PATH, SELECT_CV_PATH  } from "@constants/path.const";
import { DefaultLayout } from "@layouts";
import { useAuth } from "@hooks";

// Actions
import { getJob } from "@actions";

function ManagementJobPage() {
  const router = useRouter();
  const { id } = router.query;
  const { currentUser } = useAuth();

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
       <Grid flexDirection="column" display="flex" width="1500px">
      <Box mt={5}>
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

          {currentUser.is_super_admin ? (
          <Grid item xs={12} mt={4}>
            <Button
             sx={{
              backgroundColor: '#72BEAE',
              }}
              onClick={() => router.push(SELECT_CV_PATH(job._id))}
              variant="contained"
              color="primary"
            >
              Assign candidates
            </Button>
          </Grid>
          ):(
          <Grid item xs={12} mt={4}>
            <Typography variant="body1" color="textSecondary">
              CV Score
            </Typography>
          </Grid>
        )}
        </Grid>
      </Box>
      </Grid>
    </DefaultLayout>
  );
}

export default ManagementJobPage;
