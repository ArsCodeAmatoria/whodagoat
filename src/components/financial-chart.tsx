"use client"

import { Line } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const financialData = {
  labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
  datasets: [
    {
      label: 'Conservative Scenario',
      data: [15000000, 18000000, 22000000, 26000000, 30000000],
      borderColor: '#9ca3af',
      backgroundColor: 'rgba(156, 163, 175, 0.1)',
      tension: 0.1,
      borderDash: [5, 5],
    },
    {
      label: 'Expected Scenario',
      data: [18000000, 25000000, 32000000, 40000000, 48000000],
      borderColor: '#374151',
      backgroundColor: 'rgba(55, 65, 81, 0.1)',
      tension: 0.1,
    },
    {
      label: 'Optimistic Scenario',
      data: [25000000, 35000000, 50000000, 70000000, 95000000],
      borderColor: '#6b7280',
      backgroundColor: 'rgba(107, 114, 128, 0.1)',
      tension: 0.1,
      borderDash: [10, 5],
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        font: {
          family: 'Courier New, monospace',
          size: 11,
        },
        color: '#374151',
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      titleFont: {
        family: 'Courier New, monospace',
        size: 12,
      },
      bodyFont: {
        family: 'Courier New, monospace',
        size: 11,
      },
      callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: function(context: any) {
          return `${context.dataset.label}: $${(context.parsed.y / 1000000).toFixed(1)}M`
        }
      }
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          family: 'Courier New, monospace',
          size: 11,
        },
        color: '#374151',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callback: function(value: any) {
          return '$' + (value / 1000000).toFixed(0) + 'M'
        }
      },
      grid: {
        color: '#e5e7eb',
      },
    },
    x: {
      ticks: {
        font: {
          family: 'Courier New, monospace',
          size: 11,
        },
        color: '#374151',
      },
      grid: {
        color: '#e5e7eb',
      },
    },
  },
}

export default function FinancialChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div style={{ 
        width: '100%', 
        height: '350px',
        fontFamily: 'Courier New, monospace',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666'
      }}>
        Loading chart...
      </div>
    )
  }

  return (
    <div style={{ 
      width: '100%', 
      height: '350px',
      fontFamily: 'Courier New, monospace',
    }}>
      <Line data={financialData} options={options} />
    </div>
  )
} 