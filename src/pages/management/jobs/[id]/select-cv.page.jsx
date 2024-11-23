import { useEffect, useState, React } from "react";
import { useRouter } from "next/router";

// Core
import { Box, Grid, Typography, Chip } from "@mui/material";
import { Button } from "@components";
import { CVTable } from "@modules";

// Utils
import { DefaultLayout } from "@layouts";

// Actions
import { getJob } from "@actions";

function ManagementJobSelectCVPage() {
  const router = useRouter();
  const { id } = router.query;

  const [users, setUsers] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error("Error loading user:", error);
      }
    };

    getData();
  }, [id]);

  return (
    <DefaultLayout>
      <Box m={20}>
        <CVTable users={users}/>
      </Box>
    </DefaultLayout>
  );
}

export default ManagementJobSelectCVPage;
