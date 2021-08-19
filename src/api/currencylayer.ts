import axios from 'axios';
import { CurrencyType } from '../store/currency/types';

export const currencylayerAPI = async (
  currencyFromState: CurrencyType
): Promise<CurrencyType> => {
  const date = new Date();
  const lastFetchedDate = new Date(currencyFromState.dateFetched);

  const dayInMiliseconds = 1000 * 60 * 60 * 24;
  const daysBetweenDates = Math.floor(
    (date.getTime() - lastFetchedDate.getTime()) / dayInMiliseconds
  );

  if (daysBetweenDates >= 7) {
    interface quote {
      [key: string]: number;
    }

    interface dataFetchedType {
      privacy: string;
      quotes: quote;
      source: string;
      succes: boolean;
      terms: string;
      timestamp: number;
    }

    const currencies: dataFetchedType = await (
      await axios.get('http://apilayer.net/api/live', {
        params: {
          access_key: 'd2818773d17dd6701d7f0b21476325f0',
        },
      })
    ).data;

    let quotes: quote = {};
    for (const [key, value] of Object.entries(currencies.quotes)) {
      const quote: quote = { [key.replace('USD', '')]: value };
      quotes = { ...quotes, ...quote };
    }

    console.log(quotes);
    const currency: CurrencyType = {
      dateFetched: date,
      source: currencies.source,
      currencies: quotes,
      primaryCurrency: currencyFromState.primaryCurrency,
    };

    return currency;
  } else return currencyFromState;
};
