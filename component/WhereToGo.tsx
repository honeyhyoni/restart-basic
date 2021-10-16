import React, { useCallback, useState } from 'react';
import Router from 'next/router';
import useInput from '../utils/customHook/useInput';

const WhereToGo = (): JSX.Element => {
  const [url, onChangeUrl] = useInput('');
  const [select, setSelect] = useState(false);
  const gotoLink = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // document.location.href = `/${select ? 'hook' : 'class'}/${url}`;
    Router.push(`/${select ? 'hook' : 'class'}/${url}`);
  }, [url, select]);

  const onChangeSelect = useCallback(() => {
    setSelect((prevState) => !prevState);
  }, [select]);

  return (
    <div>
      class here
      <form onSubmit={gotoLink}>
        <input
          type='checkbox'
          onChange={onChangeSelect}
          checked={select}
        />
        <input value={url} onChange={onChangeUrl} />
      </form>
    </div>
  );
};

export default WhereToGo;
