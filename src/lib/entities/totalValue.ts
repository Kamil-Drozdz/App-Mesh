export const totalValue = data => {
	const value = data.datasets[0].data.reduce((acc, currentValue) => acc + currentValue, 0);
	return value;
};
