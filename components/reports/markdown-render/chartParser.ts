interface ChartData {
    name: string
    value: number
  }
  
  interface ChartConfig {
    type: string
    width?: string
    height?: string
    colorScheme?: string
    xAxis?: string
    yAxis?: string
    data: ChartData[]
  }
  
  export function parseChartConfig(markdown: string): ChartConfig[] {
    const chartRegex = /<chart([^>]*)>([\s\S]*?)<\/chart>/g
    const charts: ChartConfig[] = []
  
    let match
    while ((match = chartRegex.exec(markdown)) !== null) {
      const [, attributes, content] = match
  
      const config: Partial<ChartConfig> = {
        type: getAttribute(attributes, "type"),
        width: getAttribute(attributes, "width"),
        height: getAttribute(attributes, "height"),
        colorScheme: getAttribute(attributes, "colorScheme"),
        xAxis: getAttribute(attributes, "xAxis"),
        yAxis: getAttribute(attributes, "yAxis"),
      }
  
      try {
        const jsonContent = JSON.parse(content.trim())
        config.data = jsonContent.data
      } catch (error) {
        console.error("Error parsing chart data:", error)
        continue
      }
  
      if (config.type && config.data) {
        charts.push(config as ChartConfig)
      }
    }
  
    return charts
  }
  
  function getAttribute(attributes: string, name: string): string | undefined {
    const match = new RegExp(`${name}="([^"]*)"`, "i").exec(attributes)
    return match ? match[1] : undefined
  }
  
  