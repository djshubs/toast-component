import React, { useId } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ data, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {data.map(({ id, message, variant }, idx) => {
        return (
          <li key={idx} className={styles.toastWrapper}>
            <Toast
              id={id}
              handleDismiss={handleDismiss}
              variant={variant}
            >
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
