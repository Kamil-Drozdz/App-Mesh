export const data = {
	labels: ['App', 'Service', 'Products'],
	datasets: [
		{
			label: 'Percentage Share',
			data: [51, 16, 31],
			backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
			borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
			borderWidth: 1,
		},
	],
};

export const options = {
	responsive: true,
	maintainAspectRatio: false,
};
