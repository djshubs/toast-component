import React, { useCallback } from 'react';
import useKeyDown from '../../hooks/use-keyDown';
export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  console.log('Toast Provider Render');
  const [toasts, setToasts] = React.useState([]);

  const add = ({ message, variant }) => {
    const nextToasts = [
      ...toasts,
      { id: crypto.randomUUID(), message, variant },
    ];
    setToasts(nextToasts);
  };

  const remove = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  const addToasts = useCallback(add, [add]);
  const removeToast = useCallback(remove, [remove]);
  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  useKeyDown('Escape', removeAllToasts);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToasts,
        removeToast,
        removeAllToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
