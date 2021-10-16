import React, { useState, useCallback, Dispatch, SetStateAction } from 'react';

const useInput = (init: string):
  [string,
    (e: React.ChangeEvent<HTMLInputElement>) => void,
    Dispatch<SetStateAction<string>>
  ] => {
  const [value, setValue] = useState<string>(init);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
