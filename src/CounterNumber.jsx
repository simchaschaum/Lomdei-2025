import React, { useRef, useEffect, useState } from 'react';

const CounterNumber = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || hasAnimated) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setHasAnimated(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      let next = Math.floor(progress * end);
      next = Math.ceil(next / 5) * 5;
      if (next > end) next = end;
      setCount(next);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [hasAnimated, end]);

  // Pad with leading zeros to match end's length
  const endStr = end.toString();
  const countStr = count.toString().padStart(endStr.length, '0');

  return (
    <span ref={ref} className="counter-number">
      {countStr.split('').map((digit, i) => (
        <span key={i} style={{display: 'inline-block', width: '1ch'}}>{digit}</span>
      ))}
    </span>
  );
};

export default CounterNumber;
