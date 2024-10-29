import { Fragment, memo } from "react";
import PropTypes from "prop-types";
import Head from "next/head";

function BaseLayout({ children, menuContent }) {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>

      {children}
    </Fragment>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(BaseLayout);
