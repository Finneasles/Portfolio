import { useState, useEffect } from "react";

type Props = {
  text: string;
  wpm?: number;
};

export default function useReadTime({ text, wpm = 200 }: Props) {
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    if (typeof text === "string" && text.trim().length > 0) {
      const wordsPerMinute = wpm;
      const words = text.split(" ").length;
      const minutes = words / wordsPerMinute;
      const seconds = Math.round(minutes * 60);
      setReadTime(seconds);
    } else {
      setReadTime(0);
    }
  }, [text, wpm]);

  return readTime;
}
