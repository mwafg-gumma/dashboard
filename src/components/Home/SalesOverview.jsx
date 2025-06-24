import { Line } from 'react-chartjs-2'
import {
Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement,
Tooltip,
Legend,
Title,
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title)

const data = {
labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
datasets: [
    {
    label: 'Sales',
    data: [12000, 15000, 14000, 17000, 18000, 21000, 20000, 22000, 25000],
    borderColor: '#2563eb',
    backgroundColor: 'rgba(37,99,235,0.1)',
    tension: 0.4,
    fill: true,
    pointRadius: 4,
    pointBackgroundColor: '#2563eb',
    },
],
}

const options = {
responsive: true,
plugins: {
    legend: { display: false },
    title: { display: false },
},
scales: {
    y: { beginAtZero: false },
},
}

const SalesOverviewChart = () => (
<div className="bg-white rounded-xl shadow p-6 md:w-[600px] h-[340px] mt-3 ">
    <h2 className="text-xl font-bold mb-1">Sales Overview</h2>
    <p className="text-green-600 font-semibold mb-4">+4% more in 2025</p>
    <Line data={data} options={options} height={120} />
</div>
)

export default SalesOverviewChart