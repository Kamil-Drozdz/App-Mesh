export const data = {
	labels: ['January', 'February', 'March', 'April', 'May'],
	datasets: [
		{
			label: 'Earnings',
			data: [1500, 1600, 1700, 1800, 3200],
			backgroundColor: '#8b5cf6',
		},
		{
			label: 'Expense',
			data: [-1200, -1300, -1400, -1600, -1800],
			backgroundColor: ' #f97316',
		},
	],
};

export const options = {
	plugins: {
		title: {
			display: true,
		},
	},
	responsive: true,
	scales: {
		x: {
			stacked: true,
		},
		y: {
			stacked: true,
		},
	},
};

export const optionsLine = {
	responsive: true,
	scales: {
		x: {
			display: false,
		},
		y: {
			display: false,
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};
