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

const revenueData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Streaming Revenue',
      data: [2000000, 2200000, 2500000, 2800000],
      borderColor: '#374151',
      backgroundColor: 'rgba(55, 65, 81, 0.1)',
      tension: 0.1,
    },
    {
      label: 'Advertising Revenue',
      data: [800000, 950000, 1100000, 1300000],
      borderColor: '#6b7280',
      backgroundColor: 'rgba(107, 114, 128, 0.1)',
      tension: 0.1,
    },
    {
      label: 'Sponsorship Revenue',
      data: [400000, 500000, 650000, 800000],
      borderColor: '#9ca3af',
      backgroundColor: 'rgba(156, 163, 175, 0.1)',
      tension: 0.1,
    },
    {
      label: 'Merchandise Revenue',
      data: [100000, 150000, 200000, 250000],
      borderColor: '#d1d5db',
      backgroundColor: 'rgba(209, 213, 219, 0.1)',
      tension: 0.1,
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
        label: function(tooltipItem: any) {
          return `${tooltipItem.dataset.label || ''}: $${tooltipItem.parsed.y.toLocaleString()}`
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
          return '$' + (Number(value) / 1000000).toFixed(1) + 'M'
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

export default function RevenueChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div style={{ 
        width: '100%', 
        height: '400px',
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
      height: '400px',
      fontFamily: 'Courier New, monospace',
    }}>
      <Line data={revenueData} options={options} />
    </div>
  )
} 