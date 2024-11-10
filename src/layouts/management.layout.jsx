import { useRouter } from "next/router";
import { Fragment, memo } from "react";
import PropTypes from "prop-types";
import Head from "next/head";

// Core
import { Box, Dialog, DialogContent, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import AppBar from "./app_bar/app_bar";
import Main from "./main/main";

// Utils
import { useNetworkStatus } from "@hooks";
import { isPublicRoute } from "@helpers/general.helper";

function ManagementLayout({ children }) {
  const isOnline = useNetworkStatus();
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // Detect desktop screen size

  const displayBaseLayout = isPublicRoute(router.asPath);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>

      <Box>
        <AppBar />
        
        {/* Container with max width and responsive direction */}
        <Box
          sx={{
            maxWidth: 1480, // Set max width to 1480px
            margin: '0 auto', // Center the container
            padding: theme.spacing(5),
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column', // Row on desktop, column on mobile
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Stack width="100%">
            {children}
          </Stack>
        </Box>
      </Box>

      {/* Connection checker */}
      <Dialog open={!isOnline} title="connection lost">
        <DialogContent>
          <Typography variant="body1">connection lost</Typography>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

ManagementLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(ManagementLayout);
