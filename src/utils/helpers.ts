// src/utils/helpers.ts
export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const formatPrice = (price: number) =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");