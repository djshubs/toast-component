import React, { useContext, useState } from 'react';

import Button from '../Button';
import RadioInput from '../RadioInput/RadioInput';
import ToastShelf from '../ToastShelf/ToastShelf';

import styles from './ToastPlayground.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { addToast } = useContext(ToastContext);
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addToast({ message, variant });
    setVariant(VARIANT_OPTIONS[0]);
    setMessage('');
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor='message'
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id='message'
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((value) => {
                return (
                  <RadioInput
                    key={`variant-${value}`}
                    label={value}
                    name='variant'
                    value={value}
                    checked={variant === `${value}`}
                    onChange={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button type='submit'>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
