import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      const isClickable = target.closest('a, button, input, textarea, [role="button"]');
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    let animId;
    const updateTrail = () => {
      setTrailPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2
      }));
      animId = requestAnimationFrame(updateTrail);
    };
    animId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main Cursor Dot */}
      <div style={{
        position: 'fixed',
        top: pos.y,
        left: pos.x,
        width: isPointer ? '12px' : '8px',
        height: isPointer ? '12px' : '8px',
        background: 'var(--cyan-glow)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 10px var(--cyan-glow)'
      }} />

      {/* Trailing Ring */}
      <div style={{
        position: 'fixed',
        top: trailPos.y,
        left: trailPos.x,
        width: isPointer ? '44px' : '30px',
        height: isPointer ? '44px' : '30px',
        border: '1px solid var(--cyan-glow)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9998,
        transform: 'translate(-50%, -50%)',
        opacity: isPointer ? 0.8 : 0.4,
        boxShadow: isPointer ? '0 0 15px rgba(0, 243, 255, 0.4)' : 'none',
        transition: 'width 0.2s, height 0.2s, opacity 0.2s'
      }} />
    </>
  );
}
