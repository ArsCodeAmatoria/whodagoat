"use client"

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart"

interface FinancialDataItem {
  scenario: string;
  revenue: number;
  investorReturn: number;
  roi: number;
  probability: number;
}

const financialData: FinancialDataItem[] = [
  {
    scenario: "Conservative",
    revenue: 45000000,
    investorReturn: 18000000,
    roi: 80,
    probability: 60
  },
  {
    scenario: "Expected", 
    revenue: 54500000,
    investorReturn: 25000000,
    roi: 150,
    probability: 30
  },
  {
    scenario: "Optimistic",
    revenue: 75000000,
    investorReturn: 40000000,
    roi: 300,
    probability: 10
  }
]

const chartConfig = {
  revenue: {
    label: "Revenue (3-Year)",
    color: "#6b7280",
  },
  investorReturn: {
    label: "Investor Return",
    color: "#374151",
  },
} satisfies ChartConfig

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ payload: FinancialDataItem }>; label?: string }) => {
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
        <p style={{ margin: 0, fontWeight: 'bold' }}>{label} Scenario</p>
        <p style={{ margin: '4px 0 0 0' }}>
          Revenue: ${data.revenue.toLocaleString()}
        </p>
        <p style={{ margin: '2px 0 0 0' }}>
          Return: ${data.investorReturn.toLocaleString()}
        </p>
        <p style={{ margin: '2px 0 0 0' }}>
          ROI: {data.roi}%
        </p>
        <p style={{ margin: '2px 0 0 0' }}>
          Probability: {data.probability}%
        </p>
      </div>
    );
  }
  return null;
};

export default function FinancialChart() {
  return (
    <div style={{ 
      width: '100%', 
      height: '350px',
      fontFamily: 'Courier New, monospace'
    }}>
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={financialData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="scenario" 
              tick={{ fontFamily: 'Courier New, monospace', fontSize: 11, fill: '#374151' }}
            />
            <YAxis 
              tick={{ fontFamily: 'Courier New, monospace', fontSize: 11, fill: '#374151' }}
              tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
            />
            <ChartTooltip content={<CustomTooltip />} />
            <Bar dataKey="revenue" fill="#6b7280" name="Revenue" />
            <Bar dataKey="investorReturn" fill="#374151" name="Investor Return" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
} 