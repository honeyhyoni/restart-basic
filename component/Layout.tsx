import React from 'react';
import Link from 'next/link';

const Layout = ({ children }): JSX.Element => (
  <>
    {children}
    <Link href='/'>
      <a>go to home</a>
    </Link>
  </>
);

export default Layout;
