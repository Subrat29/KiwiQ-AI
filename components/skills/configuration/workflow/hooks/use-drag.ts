"use client";

import { useState, useCallback, useEffect } from 'react';
import { Position } from '@/lib/utils/workflow';

interface UseDragProps {
  onDragEnd?: (position: Position) => void;
}

export function useDrag({ onDragEnd }: UseDragProps = {}) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position | null>(null);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });

  const handleDragStart = useCallback((e: React.MouseEvent, initialPosition: Position) => {
    e.stopPropagation();
    setIsDragging(true);
    setDragStart({ x: e.clientX - initialPosition.x, y: e.clientY - initialPosition.y });
  }, []);

  const handleDrag = useCallback((e: MouseEvent) => {
    if (!isDragging || !dragStart) return;

    const newOffset = {
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    };
    setOffset(newOffset);
  }, [isDragging, dragStart]);

  const handleDragEnd = useCallback(() => {
    if (isDragging && onDragEnd) {
      onDragEnd(offset);
    }
    setIsDragging(false);
    setDragStart(null);
    setOffset({ x: 0, y: 0 });
  }, [isDragging, offset, onDragEnd]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
      
      return () => {
        window.removeEventListener('mousemove', handleDrag);
        window.removeEventListener('mouseup', handleDragEnd);
      };
    }
  }, [isDragging, handleDrag, handleDragEnd]);

  return {
    isDragging,
    offset,
    handleDragStart,
    handleDragEnd
  };
}