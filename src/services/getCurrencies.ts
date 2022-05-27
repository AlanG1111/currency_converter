const apiKey = "0f30b133ba-a417050dfb-rchled";

//getting data from api
const request = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Could not fetch ${url}, with ${error}`);
  }
};

//getting looking currency from api
export const getCurrency = async (from: string, to: string) => {
  const result = await request(
    `https://api.fastforex.io/fetch-one?from=${from}&to=${to}&api_key=${apiKey}`
  );
  return result;
};

//getting currency list from api
export const getCurrencyList = async () => {
  const result = await request(
    `https://api.fastforex.io/fetch-multi?from=USD&to=UAH%20EUR%USD&api_key=${apiKey}`
  );
  return result;
};
