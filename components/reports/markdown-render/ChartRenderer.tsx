import type React from "react"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
  Cell
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, TrendingDown } from "lucide-react"

interface ChartData {
  name: string
  value: number
}

interface ChartProps {
  type: string
  width?: string
  height?: string
  colorScheme?: string
  xAxis?: string
  yAxis?: string
  data: ChartData[]
  title?: string
  description?: string
}

const ChartRenderer: React.FC<ChartProps> = ({
  type,
  width = "100%",
  height = "300px",
  colorScheme,
  xAxis,
  yAxis,
  data,
  title,
  description,
}) => {
  const chartConfig = {
    value: {
      label: "Value",
      color: colorScheme || "hsl(var(--chart-1))",
    },
  }

  const colors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
  ]

  const renderChart = () => {
    switch (type) {
      case "bar":
        return (
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            <Bar dataKey="value" fill={`var(--color-${colorScheme || "value"})`} radius={[4, 4, 0, 0]}>
              <LabelList dataKey="value" position="top" className="fill-foreground" />
            </Bar>
          </BarChart>
        )
      case "line":
        return (
          <LineChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            <Line
              type="monotone"
              dataKey="value"
              stroke={`var(--color-${colorScheme || "value"})`}
              strokeWidth={2}
              dot={{ fill: `var(--color-${colorScheme || "value"})` }}
            >
              <LabelList dataKey="value" position="top" className="fill-foreground" />
            </Line>
          </LineChart>
        )
      case "pie":
        return (
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        )
      default:
        return <div>Unsupported chart type: {type}</div>
    }
  }

  const getTrend = () => {
    if (data.length < 2) return null
    const lastValue = data[data.length - 1].value
    const secondLastValue = data[data.length - 2].value
    const trend = ((lastValue - secondLastValue) / secondLastValue) * 100
    return {
      value: Math.abs(trend).toFixed(1),
      direction: trend >= 0 ? "up" : "down",
    }
  }

  const trend = getTrend()

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>{title || `${type.charAt(0).toUpperCase() + type.slice(1)} Chart`}</CardTitle>
        <CardDescription>{description || "Chart description"}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className={`h-[${height}]`}>
          <ResponsiveContainer width={width} height={height}>
            {renderChart()}
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      {trend && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending {trend.direction} by {trend.value}%
            {trend.direction === "up" ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
          </div>
          <div className="leading-none text-muted-foreground">Showing data for the last {data.length} periods</div>
        </CardFooter>
      )}
    </Card>
  )
}

export default ChartRenderer

