import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check for elements with custom cursor attributes
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('[data-cursor]') as HTMLElement | null;
      if (interactiveEl) {
        const text = interactiveEl.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);
      } else {
        const clickable = target.closest('a, button, [role="button"], input, select');
        if (clickable) {
          setIsHovered(true);
          setCursorText('');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Central Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#FFB51B] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Expanding Context Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#FFB51B] pointer-events-none z-50 flex items-center justify-center text-[10px] font-sans font-bold tracking-wider uppercase text-[#07120D] bg-[#FFB51B]/90 shadow-[0_0_15px_rgba(255,181,27,0.4)] backdrop-blur-xs"
        animate={{
          x: position.x - (cursorText ? 40 : isHovered ? 24 : 16),
          y: position.y - (cursorText ? 40 : isHovered ? 24 : 16),
          width: cursorText ? 80 : isHovered ? 48 : 32,
          height: cursorText ? 80 : isHovered ? 48 : 32,
          opacity: position.x < 0 ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center px-1 leading-tight text-[9px]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
