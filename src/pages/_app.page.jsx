import PropTypes from "prop-types";

// Core
import BaseLayout from "../layouts/base.layout";

// Utils
import MasterProvider from "../providers/master.provider";

function App({ Component, pageProps }) {
  return (
    <MasterProvider pageProps={pageProps}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </MasterProvider>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};

export default App;
