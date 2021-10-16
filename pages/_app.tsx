import React from 'react';
import { AppProps } from 'next/app';
import Layout from '../component/Layout';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
