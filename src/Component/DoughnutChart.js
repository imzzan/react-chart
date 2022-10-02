import React, { useRef, useCallback } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale)

const DoughnutChart = ({ chartData }) => {

  const ref = useRef(null);
  const downloadImage = useCallback(() => {
    const link = document.createElement('a');
    link.download = 'chart.png';
    link.href = ref.current.toBase64Image();
    link.click()
  }, [])

  return (
    <div className=' w-1/2 mx-auto mt-10'>
      <Doughnut ref={ref} data={chartData} />
      <button type='button' onClick={downloadImage} className=' bg-blue-500 p-3 mb-9'>Download</button>
    </div>
  )
}

export default DoughnutChart