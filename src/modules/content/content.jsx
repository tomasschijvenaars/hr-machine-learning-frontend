import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

// Core
import { Box, Grid, Stack, Typography, useMediaQuery as muiUseMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useTheme } from "@mui/material/styles";

// Utils
import { CV_PATH } from "@constants/path.const";
import { useAuth } from "@hooks";

// Style
import placeholder from "../../../public/bg1.png";
import styles from "./content.style";
import { Button } from "@components";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import StoreIcon from '@mui/icons-material/Store';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

function Content() {
  const theme = useTheme();
  const router = useRouter();
  const classes = styles(theme);
  const { currentUser } = useAuth();

  const isMobile = muiUseMediaQuery(theme.breakpoints.down('md'));

  return (
    
    <Grid
    mt={5}
    container
    justifyContent={ isMobile ? "center" : "start"}
    alignItems="center"
    spacing={2}
  >
    <Stack
      alignItems="start"
      padding={isMobile ? "20px" : "0 0 0 230px"}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom mb={2}>
        Hoe het werkt
      </Typography>
      
      {/* Step Cards */}
      <Stack direction={isMobile ? "column" : "row"} spacing={4}>
        {/* Card 1 */}
        <Stack direction="column" >
        <Box
          sx={{
            width: 150,
            height: 150,
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1">Upload je CV</Typography>
        </Box>
        <Typography variant="h6" fontWeight="bold" textAlign="center" mt={1}>
          Stap 1
        </Typography>
        </Stack>
        {/* Card 2 */}
        <Stack direction="column" >
        <Box
          sx={{
            width: 150,
            height: 150,
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1">tekening idk</Typography>
        </Box>
       
        <Typography variant="h6" fontWeight="bold" textAlign="center" mt={1}>
          Stap 2
        </Typography>
        </Stack>
        {/* Card 3 */}
        <Stack direction="column" >
        <Box
          sx={{
            width: 150,
            height: 150,
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1">tekening idk</Typography>
        </Box>
        
        <Typography variant="h6" fontWeight="bold" textAlign="center" mt={1}>
          Stap 3
        </Typography>
        </Stack>
      </Stack>
    </Stack>
  </Grid>
  );
}

export default Content;
