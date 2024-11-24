import { useEffect, useState, React } from "react";
import { useRouter } from "next/router";

// Core
import { Box, Grid, Typography, Chip } from "@mui/material";
import { Button } from "@components";
import { CVTable } from "@modules";

// Utils
import { DefaultLayout } from "@layouts";

// Actions
import { getUsers } from "@actions";

function ManagementJobSelectCVPage() {
  const router = useRouter();
  const { id } = router.query;

  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <DefaultLayout>
      <Box m={20}>
        <CVTable jobId={id} users={users}/>
      </Box>
    </DefaultLayout>
  );
}

export default ManagementJobSelectCVPage;
