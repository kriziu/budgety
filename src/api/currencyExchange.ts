import axios from 'axios';
import { CurrencyType } from '../store/currency/types';

export const currencyExchangeAPI = async (
  currencyFromState: CurrencyType
): Promise<CurrencyType> => {
  const date = new Date();
  const lastFetchedDate = new Date(currencyFromState.dateFetched);

  const dayInMiliseconds = 1000 * 60 * 60 * 24;
  const daysBetweenDates = Math.floor(
    (date.getTime() - lastFetchedDate.getTime()) / dayInMiliseconds
  );

  if (daysBetweenDates >= 7) {
    interface rate {
      [key: string]: number;
    }

    interface dataFetchedType {
      rates: rate;
      source: string;
      date: string;
      timestamp: number;
    }

    const currencies: dataFetchedType = await (
      await axios.get(
        'https://v1.nocodeapi.com/kriziuu/cx/FPLWrEBmjQDFHLdf/rates'
      )
    ).data;

    let rates: rate = {};
    for (const [key, value] of Object.entries(currencies.rates)) {
      const rate: rate = { [key]: value };
      rates = { ...rates, ...rate };
    }

    const currency: CurrencyType = {
      dateFetched: date,
      source: currencies.source,
      currencies: rates,
      primaryCurrency: currencyFromState.primaryCurrency,
    };

    return currency;
  } else return currencyFromState;
};
