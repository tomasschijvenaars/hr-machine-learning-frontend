import PropTypes from "prop-types";

// Core
import {
  Typography,
  Stack,
  Grid,
  Card,
  CardContent,
  Divider,
  Box,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PaidIcon from "@mui/icons-material/Paid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Button } from "@components";

function Job({ job, onClick }) {
  return (
    <Grid item xs={12} sm={6} md={4}> {/* Adjust breakpoints as needed */}
      <Card sx={{ boxShadow: 3, borderRadius: 2, p: 2, mb: 4 }}>
        <CardContent>
          <Stack spacing={2}>
            {/* Job Title */}
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {job?.name || "Job Title Unavailable"}
            </Typography>
            
            {/* Job Function */}
            <Box display="flex" alignItems="center" color="textSecondary">
              <BusinessCenterIcon sx={{ mr: 1 }} />
              <Typography variant="subtitle1">
                {job?.function || "Function Unavailable"}
              </Typography>
            </Box>
            
            <Divider />

            {/* Years of Experience */}
            <Box display="flex" alignItems="center" color="textSecondary">
              <AccessTimeIcon sx={{ mr: 1 }} />
              <Typography variant="body2">
                <strong>Experience:</strong> {job?.years_of_experience || "N/A"} years
              </Typography>
            </Box>

            {/* Skills */}
            {job?.skills?.length > 0 && (
              <>
                <Divider />
                <Typography variant="body2" sx={{ color: "textSecondary", mt: 1 }}>
                  <strong>Required Skills:</strong> {job.skills.join(", ")}
                </Typography>
              </>
            )}

            {/* Yearly Salary */}
            {job?.year_salary && (
              <>
                <Divider />
                <Box display="flex" alignItems="center" color="textSecondary">
                  <PaidIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">
                    <strong>Yearly Salary:</strong> ${job.year_salary.toLocaleString()}
                  </Typography>
                </Box>
              </>
            )}

                        {/* View Job Button */}
                        <Button
              variant="contained"
              color="primary"
              onClick={onClick}
              sx={{
                mt: 3,
                backgroundColor: deepPurple[500],
                ":hover": { backgroundColor: deepPurple[700] },
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              View Job
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

Job.propTypes = {
  onClick: PropTypes.func,
  job: PropTypes.obj,
};

export default Job;
