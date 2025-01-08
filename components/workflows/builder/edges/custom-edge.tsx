import { EdgeProps, getBezierPath } from 'reactflow';
import { X } from "lucide-react";

export function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: EdgeProps) {
  const [edgePath, centerX, centerY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path animated"
        d={edgePath}
        strokeWidth={2}
        stroke="#22c55e"
      />
      <foreignObject
        width={20}
        height={20}
        x={centerX - 10}
        y={centerY - 10}
        className="edge-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
        style={{ animation: 'none' }}
      >
        <div
          className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 cursor-pointer hover:bg-gray-100"
          onClick={(event) => {
            event.stopPropagation();
            data?.onDelete(id);
          }}
          style={{ animation: 'none' }}
        >
          <X className="h-3 w-3" style={{ animation: 'none' }} />
        </div>
      </foreignObject>
    </>
  );
} 