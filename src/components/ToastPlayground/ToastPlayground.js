import React, { useState } from 'react';

import Button from '../Button';
import RadioInput from '../RadioInput/RadioInput';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = useState();
  const [msg, setMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      {showToast && (
        <Toast
          variant={variant}
          handleDismiss={() => setShowToast(!showToast)}
        >
          {msg}
        </Toast>
      )}
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
              value={msg}
              onChange={(event) => setMsg(event.target.value)}
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
            <Button onClick={() => setShowToast(true)}>
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
