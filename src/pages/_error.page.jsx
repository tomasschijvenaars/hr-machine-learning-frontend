import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";

// Core
import { Typography } from "@mui/material";

const styles = {
  error: {
    color: "#000",
    background: "#fff",
    height: "100vh",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "50px 0 100px 0",
  },
  errorContent: {
    paddingTop: 64,
  },
  desc: {
    display: "block",
    textAlign: "left",
    lineHeight: 49,
    height: 49,
  },
};

const statusCodes = {
  403: "Unauthorized",
  404: "Page could not be found",
  500: "Internal Server Error",
};

function ErrorPage({ statusCode = 500 }) {
  const title = statusCodes[statusCode] || "An unexpected error has occurred";

  return (
    <div style={styles.error}>
      <Head>
        <title>{`${statusCode}: ${title}`}</title>
      </Head>

      <div style={styles.errorContent}>
        <div style={styles.desc}>
          <Typography variant="h1" paragraph>
            {`${statusCode} - ${title}`}
          </Typography>
        </div>
      </div>
    </div>
  );
}

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

ErrorPage.getInitialProps = ({ res, err }) => {
  let statusCode;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }
  return { statusCode };
};

export default ErrorPage;
