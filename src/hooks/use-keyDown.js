import { useEffect } from 'react';

const useKeyDown = (code, callbackFn) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === code) {
        callbackFn();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [code, callbackFn]);
};
export default useKeyDown;
