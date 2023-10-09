export const totalValue = (data: number[]): number => {
	const value = data.reduce((acc, currentValue) => acc + currentValue, 0);
	return value;
};
