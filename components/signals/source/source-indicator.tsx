"use client";

interface SourceIndicatorProps {
  strength: 'high' | 'medium' | 'low';
}

export function SourceIndicator({ strength }: SourceIndicatorProps) {
  return (
    <div 
      className={`w-2 h-2 rounded-full animate-pulse ${
        strength === 'high' ? 'bg-green-400' :
        strength === 'medium' ? 'bg-yellow-400' :
        'bg-slate-400'
      }`} 
    />
  );
}