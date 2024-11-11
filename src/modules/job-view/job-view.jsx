import { useState } from "react";

// Core
import { Box, Typography, Stack, Paper, Divider, Avatar, useMediaQuery } from "@mui/material";

// Style
import { useTheme } from "@mui/material/styles";
import styles from "./job-view.style";
import PaidIcon from "@mui/icons-material/Paid";

function JobView({ job }) {
  const theme = useTheme();
  const classes = styles(theme);
  const [selectedJob, setSelectedJob] = useState();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={4}
      maxWidth={1480}
      mx={isMobile ? "20px" : "auto"}
      justifyContent="center"
    >
        <Box
          style={classes.jobs}
          width={{ xs: "100%", md: "700px" }}
          minHeight={{ xs: "400px", md: "700px" }}
          maxHeight={{ xs: "500px", md: "700px" }}
          bgcolor="grey.100"
          p={3}
          borderRadius={2}
        >
          <Stack direction="row" spacing={2} alignItems="center">
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
        </Box>
    </Stack>
  );
}

export default JobView;