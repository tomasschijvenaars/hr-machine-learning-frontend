import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

// Core
import { Grid, Stack, Typography, useMediaQuery as muiUseMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Utils
import { PROFILE_PATH, LOGIN_PATH } from "@constants/path.const";
import { useAuth } from "@hooks";

// Style
import placeholder from "../../../public/bg1.png";
import styles from "./headline.style";
import { Button } from "@components";

function Headline() {
  const theme = useTheme();
  const router = useRouter();
  const classes = styles(theme);
  const { currentUser } = useAuth();

  const isMobile = muiUseMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: '#72BEAE', height: '81.7vh', width: '100%' }}
    >
      <Grid item sm={12} md={7} style={{ textAlign: 'center' }}>
        <Stack 
          alignItems="start" 
          padding={isMobile ? "20px" : "0 0 0 230px"}
        >
          <Typography variant="h2" mb={3} style={{ fontWeight: 'bold', color: 'white', textAlign: 'start' }}>
            Stuur je CV naar ons!
          </Typography>
          <Typography variant="body1" mb={5} style={{ color: 'white', maxWidth: isMobile ? '100%' : '70%', textAlign: 'start' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et dictum felis, at semper risus. Phasellus id convallis quam.
          </Typography>
          <Button 
            style={classes.headlineButton} 
            onClick={() => {
              if (currentUser) return router.push(PROFILE_PATH)
              return router.push(LOGIN_PATH)
            }}
          >
            Stuur je cv!
          </Button>
        </Stack>
      </Grid>

      <Grid 
        item 
        sm={12} 
        md={5} 
        p={5}
        padding={isMobile ? "20px" : "0 175px 0 0"}
        style={{ 
          textAlign: 'start',
          display: 'flex', 
          justifyContent: 'center'
        }}
      >
        <Image
          src={placeholder}
          alt="CV Placeholder"
          style={{
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            height: '100%',
            maxWidth: isMobile ? '65%': '100%',
            objectFit: 'contain',
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Headline;
