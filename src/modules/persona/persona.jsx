// Core
import {
  Typography,
  Stack,
  Grid,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
} from "@mui/material";
import { Button } from "@components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { deepPurple } from "@mui/material/colors";

// Utils
import { useAuth } from "@hooks";

function Persona() {
  const { currentUser } = useAuth();

  return (
    <Grid container justifyContent="left" mb={5}>
      <Card sx={{ maxWidth: 400, boxShadow: 3 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: deepPurple[500] }}>
              {currentUser?.name?.charAt(0).toUpperCase() || "U"}
            </Avatar>
          }
          title={
            <Typography variant="h6">
              {currentUser?.name || "Unknown User"}
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="textSecondary">
              {currentUser?.email || "No email provided"}
            </Typography>
          }
        />
        
        <CardContent>
          <Stack spacing={1.5}>
            {/* Address */}
            <Typography variant="body2" color="textSecondary">
              <strong>Location:</strong>{" "}
              {currentUser?.address || "No address provided"}
            </Typography>

            {/* Education */}
            {currentUser?.education && (
              <>
                <Divider />
                <Typography variant="subtitle1">
                  <strong>Education</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>{currentUser.education.degree}</strong> at{" "}
                  {currentUser.education.institution}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {currentUser.education.duration}
                </Typography>
              </>
            )}

            {/* Work Experience */}
            {currentUser?.work_experience_total_years && (
              <>
                <Divider />
                <Typography variant="subtitle1">
                  <strong>Experience</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {currentUser.work_experience_total_years} year(s) in the field
                </Typography>
              </>
            )}

            {/* Skills */}
            {(currentUser?.skills?.programming_languages?.length > 0 ||
              currentUser?.skills?.soft_skills?.length > 0) && (
              <>
                <Divider />
                <Typography variant="subtitle1">
                  <strong>Skills</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Programming:</strong>{" "}
                  {currentUser.skills.programming_languages.join(", ")}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Soft Skills:</strong>{" "}
                  {currentUser.skills.soft_skills.join(", ")}
                </Typography>
              </>
            )}

            {/* LinkedIn */}
            {currentUser?.linkedin && (
              <>
                <Divider />
                <Link
                  href={`https://${currentUser.linkedin}`}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                >
                  <Button
                    startIcon={<LinkedInIcon />}
                    color="primary"
                    variant="text"
                  >
                    LinkedIn
                  </Button>
                </Link>
              </>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Persona;
