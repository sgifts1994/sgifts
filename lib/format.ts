export function formatPrice(value: number) {
  return `${value.toLocaleString("en-US")} ج.م`;
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
