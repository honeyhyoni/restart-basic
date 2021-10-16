import React from 'react';
import Link from 'next/link';
import WhereToGo from '../component/WhereToGo';

const Home = (): JSX.Element => {
  const test = 'test';
  return (
    <div>
      {test}
      <WhereToGo />
    </div>
  );
};

export default Home;
