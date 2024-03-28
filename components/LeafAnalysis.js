import React from 'react'
import Image from "next/image";

// use radar chart for leaf analysis
import {Chart as ChartJS, CategoryScale,
  LinearScale,
  Tooltip,
  PointElement, RadialLinearScale,
  LineElement,} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, RadialLinearScale,
  Tooltip
);

export default function LeafAnalysis() {

  const labels = [
    // days of the week
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat',
    'Sun'
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Plant height',
        data: [65, 59, 90, 81, 56, 85, 40],
        fill: true,
        backgroundColor: 'rgba(178, 243, 95,0.2)',
        borderColor: 'rgba(178, 243, 95,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
      },

      {
        label: 'Leaf Area Index',
        data: [6, 51, 10, 60, 56, 45, 40],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
      },

      {
        label: 'Leaf Analysis',
        data: [11, 70, 20, 100, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(219, 9, 114,0.2)',
        borderColor: 'rgba(219, 9, 114,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75,192,192,1)',
      }
    ],
  };


  const options = {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          color: 'rgba(255,255,255,0.5)',
          display: false, 
        },
        grid: {
          color: 'rgba(255,255,255,0.5)',
          backgroundColor: 'rgba(255,255,255,0.5)',
          circular: false,
        },

        // label color
        pointLabels: {
          color: 'rgba(255,255,255,0.5)',
          fontSize: 14,
        },

        // remove background from scale label
        angleLines: {
          display: false,
        },
      },
    },
  };


  return (
    <div className='leaf-analysis-section'>
        <Radar data={data} options={options} />
    </div>
  )
}
