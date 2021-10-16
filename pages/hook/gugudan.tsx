import React, { useCallback, useRef, useState } from 'react';
import useInput from '../../utils/customHook/useInput';

const GuguDanHook = (): JSX.Element => {
  const [first, setFirst] = useState<number>(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState<number>(Math.ceil(Math.random() * 9));
  const [answer, setAnswer] = useState<string>('');
  const [value, onChangeValue, setValue] = useInput('');
  const inputRef = useRef<HTMLInputElement>(null);

  const makeRandomNumber = () => Math.ceil(Math.random() * 9);

  const onSubmitValue = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (first * second === Number(value)) {
      setFirst(makeRandomNumber);
      setSecond(makeRandomNumber);
      setAnswer('correct');
      setValue('');
    } else {
      setAnswer('wrong');
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [first, second, value, inputRef]);

  return (
    <form onSubmit={onSubmitValue}>
      <div>
        <span>{first}</span>
        <span>*</span>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <span>{second}</span>
        <span>=</span>
        <input
          value={value}
          ref={inputRef}
          onChange={onChangeValue}
        />
      </div>
      <div>
        <span>
          {answer}
        </span>
      </div>
    </form>
  );
};

export default GuguDanHook;
