import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container, StyledSelect } from './Elements';

interface CurrencySelectorProps {
  color: string;
  onChangeAction: (e: string) => void;
  style?: { [key: string]: string };
  currency?: string;
  container?: boolean;
}

const CurrencySelector: FC<CurrencySelectorProps> = ({
  color,
  onChangeAction,
  style,
  currency,
  container = true,
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

  useEffect(() => {
    !currency && setCurrentCurrency(primaryCurrency);
  }, [primaryCurrency, currency]);

  const currenciesHeaders = Object.entries(currencies).map(currency => {
    return { value: currency[0], label: currency[0] };
  });

  const handleSelectChange = (e: { label: string; value: string }): void => {
    setCurrentCurrency(e.value);
    onChangeAction(e.value);
  };

  const renderSelect = (): JSX.Element => {
    return (
      <StyledSelect
        options={currenciesHeaders}
        classNamePrefix="Select"
        color={color}
        value={{ value: currentCurrency, label: currentCurrency }}
        onChange={handleSelectChange}
      />
    );
  };

  return (
    <>{container ? <Container>{renderSelect()}</Container> : renderSelect()}</>
  );
};

export default CurrencySelector;
