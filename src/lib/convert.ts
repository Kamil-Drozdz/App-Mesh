export function convert(value: number): string {
  if (value >= 1000000) {
    return `${value / 1000000}M`;
  } else if (value >= 1000) {
    return `${value / 1000}K`;
  }
  return value.toString();
}
