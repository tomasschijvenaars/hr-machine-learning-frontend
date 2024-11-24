import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

// Core
import { Box, Grid, Stack, Link, Typography, useMediaQuery as muiUseMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useTheme } from "@mui/material/styles";

// Utils
import { PROFILE_PATH, JOBS_PATH } from "@constants/path.const";
import { useAuth } from "@hooks";

// Style
import styles from "./content.style";
import { Button } from "@components";
import CheckIcon from '@mui/icons-material/Check';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PsychologyIcon from '@mui/icons-material/Psychology';
import vacatures from "../../../public/vacatures.png";

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
      <Typography variant="h5" id="about" fontWeight="bold" gutterBottom mb={2}>
        Hoe het werkt
      </Typography>
      
      {/* Step Cards */}
      <Stack direction={isMobile ? "column" : "row"} spacing={4}>
        {/* Card 1 */}
        <Stack direction="column" >
        <Box
        style={classes.howButtons}
        >
        <UploadFileIcon style={classes.icons} />
        </Box>
        <Typography style={classes.steps} variant="h6" fontWeight="bold" textAlign="center" mt={1}>
         Upload je cv
        </Typography>
        </Stack>
        {/* Card 2 */}
        <Stack direction="column" >
        <Box
           style={classes.howButtons}
        >
          <PsychologyIcon style={classes.icons}/>
        </Box>
        <Typography style={classes.steps} variant="h6" fontWeight="bold" textAlign="center" mt={1}>
          Wij berekenen
        </Typography>
        </Stack>
        {/* Card 3 */}
        <Stack direction="column" >
        <Box
          style={classes.howButtons}
        >
         <CheckIcon style={classes.icons} />
        </Box>
        <Typography style={classes.steps} variant="h6" fontWeight="bold" textAlign="center" mt={1}>
          Klaar!
        </Typography>
        </Stack>
      </Stack>
    </Stack>
    <Stack mt={8} p={2} style={classes.tips}>
    <Typography fontWeight="bold" textAlign="center" mt={1}>
          Tip #1
    </Typography>
    <Typography mt={2}>Upload je CV als een PDF-bestand om toegang te krijgen tot de beschikbare vacatures. Een PDF zorgt ervoor dat je CV netjes en goed leesbaar blijft</Typography>
    </Stack>
    <Stack
  mt={8}
  padding={isMobile ? "20px" : "0 0 0 230px"}
  direction={isMobile ? 'column' : 'row'}
  spacing={2}
  alignItems={isMobile ? 'center' : 'start'} // Center items on mobile
  justifyContent={isMobile ? 'center' : 'flex-start'} // Center layout on mobile
>
  {/* Left Side - Image */}
  <Box
    style={{
      width: '300px',
      height: 'auto',
    }}
  >
    <Image
      src={vacatures}
      alt="Example"
      style={{
        width: '100%',
        borderRadius: '8px',
        objectFit: 'cover',
        height: '100%',
        border: '1px solid lightgrey',
      }}
    />
  </Box>

  {/* Right Side - Text and Button */}
  <Box
    style={{
      alignItems: isMobile ? 'center' : 'flex-start',
      textAlign: isMobile ? 'center' : 'left', // Center text and button on mobile
      width: '400px',
    }}
  >
    <Typography mt={isMobile ? 4 : 10} variant="body1" gutterBottom>
      Upload je CV en ontdek direct welke vacatures perfect bij jou passen!
    </Typography>
    <Button
       onClick={() => {
        if (currentUser) return router.push(JOBS_PATH)
        return router.push(LOGIN_PATH)
      }}
      variant="contained"
      color="primary"
      style={{
        backgroundColor: '#294A3F',
        marginTop: isMobile ? '16px' : '0',
      }}
    >
      Bekijk vacatures!
    </Button>
  </Box>
</Stack>
<Stack mt={8} p={2} style={classes.tips}>
<Typography fontWeight="bold" textAlign="center" mt={1}>
      Tip #2
</Typography>
<Typography mt={2}>Heeft u nog geen CV? U kunt eenvoudig een professioneel CV downloaden of aanmaken via uw LinkedIn-profiel. Hiermee bespaart u tijd en beschikt u direct over een overzichtelijk en up-to-date documentn</Typography>
</Stack>
<Stack
      direction={isMobile ? 'column' : 'row'}
      spacing={isMobile ? 2 : 4}
      alignItems="center"
      mt={8}
      justifyContent="center"
      padding="20px"
      width="100%"
      style={{
        backgroundColor: '#f8f9fa',
        borderTop: '1px solid #e0e0e0',
        textAlign: isMobile ? 'center' : 'left',
      }}
    >
      {/* Link to Vacatures */}
      <Link 
         onClick={() => {
          if (currentUser) return router.push(JOBS_PATH)
          return router.push(LOGIN_PATH)
        }} 
        underline="hover" 
        style={{ fontSize: '16px', color: '#1976d2', fontWeight: 'bold' }}
      >
        Vacatures
      </Link>

      {/* Link to Profile */}
      <Link
         onClick={() => {
          if (currentUser) return router.push(PROFILE_PATH)
          return router.push(LOGIN_PATH)
        }}
        underline="hover" 
        style={{ fontSize: '16px', color: '#1976d2', fontWeight: 'bold' }}
      >
        Profiel
      </Link>

      {/* Footer Text */}
      <Typography variant="body2" style={{ color: '#6c757d' }}>
        © {new Date().getFullYear()} HRML. Alle rechten voorbehouden.
      </Typography>
    </Stack>
  </Grid>
  );
}

export default Content;
