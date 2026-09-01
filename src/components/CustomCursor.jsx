import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(200,169,110,0.06) 0%, rgba(200,169,110,0.02) 30%, transparent 70%)',
        borderRadius: '50%',
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
      }}
    />
  );
};

export default CustomCursor;
