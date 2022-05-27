//Type of currency select
export type SelectType = {
  currency: string[] | [];
  value: string | undefined;
  onChange: (value: string) => void;
};

//Type of input converter
export type InputType = {
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

//Type of data from API
type Currencies = { EUR: number; UAH: number; USD: number };

export type DataType = {
  base: string;
  ms: number;
  results: Currencies;
  updated: string;
};
