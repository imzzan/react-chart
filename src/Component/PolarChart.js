import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

const PolarChart = ({chartData}) => {
  return (
    <div className=' w-1/2 mx-auto mt-20'>
        <PolarArea data={chartData}/>
    </div>
  )
}

export default PolarChart