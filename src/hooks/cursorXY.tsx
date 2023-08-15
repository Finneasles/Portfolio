import { useState, useEffect, useRef } from 'react';

const useCursorLocation = () => {
  const [cursorLocation, setCursorLocation] = useState({ x: 0, y: 0 });
  const targetRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top } = targetRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setCursorLocation({ x, y });
  };

  useEffect(() => {
    const targetElement = targetRef.current;
    targetElement.addEventListener('mousemove', handleMouseMove);
    return () => {
      targetElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { cursorLocation, targetRef };
};

export default useCursorLocation;
