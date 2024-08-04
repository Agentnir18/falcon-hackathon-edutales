import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  message: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev + message[index]);
        setIndex(prev => prev + 1);
      }, 25); // Adjust typing speed here

      return () => clearTimeout(timeoutId);
    }
  }, [index, message]);

  return <p className="whitespace-pre-line">{displayedText}</p>;
};

export default TypingEffect;
