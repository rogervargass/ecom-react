import { CurrencyEnum } from "../types/Currency.enum";

export function formatCurrency(value: number, currency: CurrencyEnum, locale: Intl.LocalesArgument = 'en-US') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}