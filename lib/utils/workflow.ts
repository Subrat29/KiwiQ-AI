export interface Position {
  x: number;
  y: number;
}

export function getRelativePosition(event: MouseEvent, container: HTMLElement): Position {
  const rect = container.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

export function snapToGrid(position: Position, gridSize: number = 20): Position {
  return {
    x: Math.round(position.x / gridSize) * gridSize,
    y: Math.round(position.y / gridSize) * gridSize
  };
}