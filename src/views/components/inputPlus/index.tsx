import React, { ChangeEvent, useCallback, useState } from 'react';
import styles from './index.module.scss';

interface InputPlusProps {
  onAdd: (title: string) => void;
}

export const InputPlus: React.FC<InputPlusProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const addTask = useCallback(() => {
    onAdd(inputValue);
    setInputValue('');
  }, [inputValue]);

  return (
    <div className={styles.inputPlus}>
      <input
        type="text"
        className={styles.inputPlusValue}
        value={inputValue}
        onChange={(evt: ChangeEvent<HTMLInputElement>) => {
          setInputValue(evt.target.value);
        }}
        // @ts-ignore
        onKeyDown={(evt: KeyboardEvent<HTMLInputElement>) => {
          if (evt.key === 'Enter') {
            addTask();
          }
        }}
        placeholder="type here..."
      />
      <button onClick={addTask} aria-label="Add" className={styles.inputPlusButton} />
    </div>
  );
};
