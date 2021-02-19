const generateRandom = () => {
  return Math.ceil(Math.random() * 10);
};

export const getRandomSet = () => {
  return [generateRandom(), generateRandom(), generateRandom()];
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export const currencyFormat = (currency) => {
  return formatter.format(currency);
};
