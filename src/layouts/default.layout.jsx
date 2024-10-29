import { useRouter } from "next/router";
import { Fragment, memo } from "react";
import PropTypes from "prop-types";
import Head from "next/head";

// Core
import { Dialog, DialogContent, Stack, Typography } from "@mui/material";

import AppBar from "./app_bar/app_bar";
import Main from "./main/main";

// Utils
import { useMediaQuery, useNetworkStatus } from "@hooks";
import { isPublicRoute } from "@helpers/general.helper";

function DefaultLayout({ children }) {
  const isOnline = useNetworkStatus();
  const router = useRouter();

  const displayBaseLayout = isPublicRoute(router.asPath);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>

      <Stack flexDirection= "column">
        {(!displayBaseLayout) && (
          <AppBar />
        )}
        <Main>
          {children}
        </Main>
      </Stack>

      {/* Connection checker */}
      <Dialog
        open={!isOnline}
        title="connection lost"
      >
        <DialogContent>
          <Typography variant="body1">
            connection lost
          </Typography>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(DefaultLayout);
