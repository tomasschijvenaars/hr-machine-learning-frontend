import { useRouter } from "next/router";

// Core
import { Grid, Paper, Typography, Button, useMediaQuery as muiUseMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DefaultLayout } from "@layouts";

// Utils
import { JOBS_PATH, CREATE_JOB_PATH, HOME_PATH } from "@constants/path.const"
import { useAuth } from "@hooks";

function Dashboard() {
  const router = useRouter();
  const { currentUser } = useAuth();
  const theme = useTheme();
  const isMobile = muiUseMediaQuery(theme.breakpoints.down("md"));

  if (!currentUser.is_super_admin)
    router.push(HOME_PATH);

  return (
    <DefaultLayout>
      {/* Bovenste Banner */}
      <Grid
        style={{
          position: "absolute",
          top: isMobile ? 60 : 70,
          backgroundColor: "#F5F5F5",
          width: "100%",
          height: "200px",
        }}
      ></Grid>

      {/* Content Grid */}
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
        style={{position: "relative", marginTop: "80px", padding: "0 20px" }}
      >
        {/* CV's Geüpload */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: "#333",
              color: "#fff",
            }}
          >
            <Typography variant="h5">CVs geüpload</Typography>
            <Typography variant="h3">23</Typography>
            <Button
              onClick={() => router.push(JOBS_PATH)}
              variant="contained"
              style={{ marginTop: "10px", backgroundColor: "#72BEAE", color: "white" }}
            >
              Bekijk cv's
            </Button>
          </Paper>
        </Grid>

        {/* Vacatures Open */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h5">Vacatures open</Typography>
            <Typography variant="h3">3</Typography>
            <Button
              onClick={() => router.push(JOBS_PATH)}
              variant="contained"
              style={{ marginTop: "10px", backgroundColor: "#72BEAE", color: "white" }}
            >
              Bekijk vacatures
            </Button>
          </Paper>
        </Grid>

        {/* Sollicitanten */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h5">Sollicitanten</Typography>
            <Typography variant="h3">2</Typography>
            <Button
              variant="contained"
              style={{ marginTop: "10px", backgroundColor: "#72BEAE", color: "white" }}
            >
              Bekijk cv's
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Extra Content (optioneel) */}
    </DefaultLayout>
  );
}

export default Dashboard;
