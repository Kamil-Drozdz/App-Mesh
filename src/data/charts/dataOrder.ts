export const data = {
	labels: ['January', 'February', 'March', 'April', 'May'],
	datasets: [
		{
			label: 'Orders',
			data: [600, 580, 560, 520, 500],
			backgroundColor: 'rgba(253, 194, 0, 0.6)',
		},
	],
};

export const options = {
	plugins: {
		title: {
			display: true,
			text: 'Orders Chart Over the Year',
		},
	},

	responsive: true,

	scales: {
		y: {
			beginAtZero: true,
			title: {
				display: true,
				text: 'Orders',
			},
		},
		x: {
			title: {
				display: true,
				text: 'Month',
			},
		},
	},

	legend: {
		display: false,
	},
};
