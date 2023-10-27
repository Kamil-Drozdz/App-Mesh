export const generateData = <T>(count: number, generator: () => T): T[] => {
  const data: T[] = [];
  for (let i = 0; i < count; i++) {
    data.push(generator());
  }
  return data;
};
