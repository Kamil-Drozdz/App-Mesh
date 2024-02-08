export function convertNumberToThousands(value: number): string {
  if (value >= 1000000) {
    return `${value / 1000000}M`;
  }
  if (value >= 1000) {
    return `${value / 1000}K`;
  }
  return value.toString();
}
