import { useState } from "react";

// Core
import { Box, Typography, Stack, Paper, Divider, Avatar, useMediaQuery } from "@mui/material";

// Style
import { useTheme } from "@mui/material/styles";
import styles from "./job-view.style";

function JobView() {
  const theme = useTheme();
  const classes = styles(theme);
  const [selectedJob, setSelectedJob] = useState("Backend Developer");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const jobs = [
    {
      title: "Backend Developer",
      salary: "€15,00 per uur",
      skills: ["Java, C++", "4+ jaar ervaring"],
      details: {
        company: "Ad-Academie",
        location: "4704 Roosendaal",
        salaryRange: "€13,73 - €14,80 per uur",
        contractType: "Parttime, Fulltime",
        description: [
          "4+ jaar professionele software-engineering-ervaring",
          "Professionele ervaring met Java, Scala of Kotlin",
          "Ervaring met Spring Boot of Docker",
          "Ervaring met Microservices en/of Cloud",
          "Je wilt jezelf graag ontwikkelen, zowel technisch als communicatief",
          "Test en delivery automation vind jij een onderdeel van jouw werk",
          "Een technische BSc- of MSc-opleiding",
        ],
        imageUrl: "/images/company-logo.png",
      },
    },
    // jobs hier
  ];

  const selectedJobDetails = jobs.find((job) => job.title === selectedJob)?.details;

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={4}
      p={3}
      m={5}
      maxWidth={1480}
      mx={isMobile ? "20px" : "auto"}
      justifyContent="center"
    >
      <Stack
        style={classes.container}
        maxWidth="400px"
        width="100%"
        spacing={5}
        maxHeight={isMobile ? "300px" : "700px"}
      >
        {jobs.map((job, index) => (
          <Paper
            key={index}
            elevation={2}
            style={classes.jobDetail}
            sx={{
                bgcolor: selectedJob === job.title ? "grey.200" : "white",
            }}
            onClick={() => setSelectedJob(job.title)}
          >
            <Typography variant="h6" fontWeight="bold">{job.title}</Typography>
            <Box mt={1} mb={1}>
              <Typography variant="body2" color="textSecondary">
                {job.salary}
              </Typography>
            </Box>
            <Typography variant="body2">
              {job.skills.map((skill, i) => (
                <Box key={i} component="li">{skill}</Box>
              ))}
            </Typography>
          </Paper>
        ))}
      </Stack>

      {selectedJobDetails && (
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
              src={selectedJobDetails.imageUrl}
              alt={selectedJobDetails.company}
              sx={{ width: 60, height: 60 }}
            />
            <Box>
              <Typography variant="h5">{selectedJob}</Typography>
              <Typography variant="body2" color="textSecondary">
                {selectedJobDetails.salaryRange} - {selectedJobDetails.contractType}
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle1" fontWeight="bold">
            {selectedJobDetails.company}
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            📍 {selectedJobDetails.location}
          </Typography>

          <Typography variant="body1" gutterBottom>
            Wat wordt er gevraagd?
          </Typography>
          <Box component="ul" pl={2}>
            {selectedJobDetails.description.map((item, index) => (
              <Typography key={index} component="li" variant="body2">
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
    </Stack>
  );
}

export default JobView;
