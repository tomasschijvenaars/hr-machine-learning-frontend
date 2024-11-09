import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";


// Core
import { Grid, Box } from "@mui/material";

// Utils
import { DefaultLayout } from "@layouts";

// Actions
import { getJob } from "@actions";

function ManagementJobPage() {
  const router = useRouter()
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
      <Box m={2}>
        <Grid container spacing={2}>
            {job?.function}
        </Grid>
      </Box>
    </DefaultLayout>
  );
}

export default ManagementJobPage;
