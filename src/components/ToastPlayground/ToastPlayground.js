import React, { useState } from 'react';

import Button from '../Button';
import RadioInput from '../RadioInput/RadioInput';
import ToastShelf from '../ToastShelf/ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = useState('notice');
  const [message, setMessage] = useState('');
  const [toasts, setToasts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newToast = { id: crypto.randomUUID(), message, variant };
    setToasts([...toasts, newToast]);
    setVariant('notice');
    setMessage('');
  };

  const handleDismiss = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && (
        <ToastShelf data={toasts} handleDismiss={handleDismiss} />
      )}

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
                    key={value}
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
