import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Select } from './Elements';

interface CurrencySelectorProps {
  color: string;
  onChangeAction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: { [key: string]: string };
  currency?: string;
}

const CurrencySelector: FC<CurrencySelectorProps> = ({
  color,
  onChangeAction,
  style,
  currency,
}): JSX.Element => {
  const currencies = useSelector(
    (state: RootState) => state.currency.currencies
  );
  const primaryCurrency = useSelector(
    (state: RootState) => state.currency.primaryCurrency
  );

  const [currentCurrency, setCurrentCurrency] = useState(primaryCurrency);

  useEffect(() => {
    currency && setCurrentCurrency(currency);
  }, [currency]);

  const renderCurrenciesOptions = (): JSX.Element[] => {
    return Object.entries(currencies).map(currency => {
      return (
        <option value={currency[0]} key={currency[0]}>
          {currency[0]}
        </option>
      );
    });
  };

  const handleSelectChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCurrentCurrency(e.target.value);
    onChangeAction(e);
  };

  return (
    <Select
      color={color}
      onChange={handleSelectChange}
      value={currentCurrency}
      style={style}
    >
      {renderCurrenciesOptions()}
    </Select>
  );
};

export default CurrencySelector;
