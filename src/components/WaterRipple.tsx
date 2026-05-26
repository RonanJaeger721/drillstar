import React from 'react';

interface WaterRippleProps {
  className?: string;
  color?: string;
}

export default function WaterRipple({ className = '', color = 'rgba(0, 173, 181, 0.4)' }: WaterRippleProps) {
  return (
    <div className={`absolute pointer-events-none overflow-hidden ${className}`}>
      {/* Real-time interactive CSS-animated ripple effects */}
      <div 
        className="absolute rounded-full border animate-water-ripple" 
        style={{ 
          borderColor: color, 
          width: '100%', 
          height: '100%',
          top: '0%',
          left: '0%', 
        }} 
      />
      <div 
        className="absolute rounded-full border animate-water-ripple ripple-delay-1" 
        style={{ 
          borderColor: color, 
          width: '100%', 
          height: '100%',
          top: '0%',
          left: '0%',
        }} 
      />
      <div 
        className="absolute rounded-full border animate-water-ripple ripple-delay-2" 
        style={{ 
          borderColor: color, 
          width: '100%', 
          height: '100%',
          top: '0%',
          left: '0%',
        }} 
      />
    </div>
  );
}
