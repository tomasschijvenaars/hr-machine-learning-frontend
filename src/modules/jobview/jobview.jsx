import { useRouter } from "next/router";

// Core
import { Box, Typography, Stack, Paper, Divider, Avatar, useMediaQuery } from "@mui/material";
import { Button } from "@components";

// Utils
import {JOB_PATH} from "@constants/path.const";

// Style
import { useTheme } from "@mui/material/styles";
import styles from "./jobview.style";
import PaidIcon from "@mui/icons-material/Paid";

function JobView({ job, onClick }) {
  const theme = useTheme();
  const classes = styles(theme);
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={4}
      maxWidth={1480}
      mx={isMobile ? "20px" : "auto"}
      justifyContent="center"
      marginLeft={isMobile ? "" : "75px"}
    >
        <Box
          style={classes.jobs}
          width={{ xs: "100%", md: "400px" }}
          minHeight={{ xs: "400px", md: "700px" }}
          maxHeight={{ xs: "500px", md: "700px" }}
          p={3}
          borderRadius={2}
        > 
          <Stack style={classes.header_job} direction="row" spacing={2} alignItems="center">
            <Avatar
              // src={selectedJobDetails.imageUrl}
              // alt={selectedJobDetails.company}
              sx={{ width: 60, height: 60 }}
            />
            <Box>
              <Typography variant="h5">{job?.name}</Typography>
              <Typography variant="body2" color="textSecondary">
              ${job.year_salary.toLocaleString()}
              </Typography>
            </Box>
          
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle1" fontWeight="bold">
           
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            📍 {job?.location}
          </Typography>

          <Typography variant="body1" gutterBottom>
            Wat wordt er gevraagd?
          </Typography>
          <Box component="ul" pl={2}>
              <Typography  component="li" variant="body2">
                Skills: {job.skills.join(", ")}
              </Typography>
          </Box>

          <Button
              variant="contained"
              color="primary"
   
              onClick={() => router.push(JOB_PATH(job._id))}
              sx={{
                mt: 3,
                backgroundColor: '#72BEAE',
                ":hover": { backgroundColor: 'black' },
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              View Job
            </Button>
          
        </Box>
    </Stack>
  );
}

export default JobView;