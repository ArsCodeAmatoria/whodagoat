"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart"

interface RevenueDataItem {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const revenueData: RevenueDataItem[] = [
  { name: "Streaming Rights", value: 8000000, percentage: 58, color: "#374151" },
  { name: "Advertising Revenue", value: 3500000, percentage: 25, color: "#6b7280" },
  { name: "Sponsorship Deals", value: 1800000, percentage: 13, color: "#9ca3af" },
  { name: "Merchandise/Licensing", value: 500000, percentage: 4, color: "#d1d5db" },
]

const chartConfig = {
  streaming: {
    label: "Streaming Rights",
    color: "#374151",
  },
  advertising: {
    label: "Advertising Revenue", 
    color: "#6b7280",
  },
  sponsorship: {
    label: "Sponsorship Deals",
    color: "#9ca3af",
  },
  merchandise: {
    label: "Merchandise/Licensing",
    color: "#d1d5db",
  },
} satisfies ChartConfig

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: RevenueDataItem }> }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div style={{
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '6px',
        padding: '12px',
        fontFamily: 'Courier New, monospace',
        fontSize: '11px'
      }}>
        <p style={{ margin: 0, fontWeight: 'bold' }}>{data.name}</p>
        <p style={{ margin: '4px 0 0 0' }}>
          ${data.value.toLocaleString()} ({data.percentage}%)
        </p>
      </div>
    );
  }
  return null;
};

export default function RevenueChart() {
  return (
    <div style={{ 
      width: '100%', 
      height: '400px',
      fontFamily: 'Courier New, monospace'
    }}>
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={revenueData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              stroke="none"
            >
              {revenueData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{
                fontFamily: 'Courier New, monospace',
                fontSize: '11px'
              }}
              formatter={(value) => (
                <span style={{ color: '#374151' }}>
                  {value}: ${revenueData.find(d => d.name === value)?.value.toLocaleString()} ({revenueData.find(d => d.name === value)?.percentage}%)
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
} 