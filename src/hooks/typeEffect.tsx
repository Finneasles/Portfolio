import { useState, useEffect } from "react";

const useTypingEffect = ({
  text,
  typingDelay = 20,
  deletingDelay = 15,
  pauseDelay = 7500,
}: {
  text: any[];
  typingDelay?: number;
  deletingDelay?: number;
  pauseDelay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentText = text[currentIndex];

    let timer;

    if (!isDeleting) {
      // adding text
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          timer = setTimeout(() => {setIsDeleting(true);}, pauseDelay);
        }
      }, typingDelay);
    } else {
      // deleting text
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          // switch to typing mode
          setIsDeleting(false);
            setCurrentIndex((currentIndex + 1) % text.length)
        }
      }, deletingDelay);
    }

    return () => clearTimeout(timer);
  }, [
    displayText,
    currentIndex,
    isDeleting,
    text,
    typingDelay,
    deletingDelay,
    pauseDelay,
  ]);

  return displayText;
};

export default useTypingEffect;
