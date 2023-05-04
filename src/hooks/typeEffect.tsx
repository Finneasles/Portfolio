import { useState, useEffect } from 'react';

const useTypingEffect = (textArr, delay = 1000, interval = 100, stopTime = 1000) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [shouldStop, setShouldStop] = useState(false);

  useEffect(() => {
    const currentText = textArr[index];

    if (shouldStop) {
      setTimeout(() => {
        setShouldStop(false);
        setIndex(index + 1);
        setDisplayText('');
      }, stopTime);
      return;
    }

    const timer = setTimeout(() => {
      if (currentText.length > displayText.length) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      } else {
        setShouldStop(true);
      }
    }, interval);

    return () => clearTimeout(timer);
  }, [displayText, index, interval, shouldStop, stopTime, textArr]);

  useEffect(() => {
    if (index === textArr.length) {
      setIndex(0);
    }
  }, [index, textArr.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldStop(false);
      setDisplayText('');
      setIndex(0);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return displayText;
};

export default useTypingEffect;
