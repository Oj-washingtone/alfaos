"use client";

import React from 'react'
import {Chart as ChartJS, CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,} from 'chart.js';
import { Line } from 'react-chartjs-2';


// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );

export default function LineChart() {
    // labels to be time of the day 24hrs

    let labels = [
        '12am',
        '1am',
        '2am',
        '3am',
        '4am',
        '5am',
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
        '8pm',
        '9pm',
        '10pm',
        '11pm'
    ];
    
    let dataset = [
        {
            label: 'Temperature in C°',
            data: [12, 19, 3, 5, 2, 3, 5, 6],
            fill: true,
            backgroundColor: '#b2f35f',
            borderColor: '#b2f35f',
        },
        {
            label: 'Humidity in %',
            data: [2, 3, 20, 5, 1, 4, 7, 8],
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
        },
        {
            label: 'Light intesity in lux',
            data: [3, 2, 7, 6, 5, 4, 3, 4],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        }
    ];
  return (
    <div>
        <Line
            data={{
            labels: labels,
            datasets: dataset,
            }}

            height={280}
            width={600}

            options={{
            maintainAspectRatio: false,
            }}
        />
    </div>
  )
}
