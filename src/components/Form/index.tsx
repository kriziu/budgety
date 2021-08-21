import React, { FC, useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import useForm from '../../hooks/useForm';
import { Input } from '../Input';
import { Container, StyledForm, Label, Warning } from './Elements';
import { Button } from '../Button';
import CurrencySelector from '../CurrencySelector';
import { RootState } from '../../store';

interface FormProps {
  handleSubmit: (title: string, amount: number, currency: string) => void;
  disabled?: boolean;
  children?: JSX.Element;
  childrenBefore?: JSX.Element;
  button?: boolean;
  data?: {
    [key in 'title' | 'amount']: { value: string; required: boolean };
  };
  currency?: string;
  style?: {};
}

const Form: FC<FormProps> = ({
  handleSubmit,
  disabled = false,
  children,
  childrenBefore,
  button = true,
  data,
  currency,
  style,
}): JSX.Element => {
  const [formData, setFormData, toggleChecked, handleInputChange] = useForm(
    data
      ? data
      : {
          title: { value: '', required: true },
          amount: { value: '', required: true },
        }
  );
  const primaryCurrency = useSelector(
    (state: RootState) => state.currency.primaryCurrency
  );

  const [formCurrency, setFormCurrency] = useState(primaryCurrency);

  const { title, amount } = formData;

  useEffect(() => {
    currency && setFormCurrency(currency);
  }, [currency]);

  useEffect(() => {
    !currency && setFormCurrency(primaryCurrency);
  }, [primaryCurrency, currency]);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!disabled) {
      const amountCheck = amount.required && !amount.value;
      const titleCheck = title.required && !title.value;

      if (amountCheck && titleCheck) {
        let newState = {};

        for (const [key, value] of Object.entries(formData)) {
          newState = { ...newState, [key]: { ...value, checked: false } };
        }

        setFormData(newState);
      } else {
        if (titleCheck) toggleChecked('title');

        if (amountCheck) toggleChecked('amount');
      }

      if (amountCheck || titleCheck) return;
      const amountNum = parseFloat(formData.amount.value);

      handleSubmit(title.value, amountNum, formCurrency);

      setFormData({
        title: { ...title, value: '' },
        amount: { ...amount, value: '' },
      });
    }
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormCurrency(e.target.value);
  };

  return (
    <StyledForm
      onSubmit={handleSubmitForm}
      noValidate
      autoComplete="off"
      style={style}
    >
      <Container>{childrenBefore}</Container>
      <Container>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Enter budget title"
          value={title.value}
          onChange={handleInputChange}
        />
        {!title.checked && <Warning>Fill out this field!</Warning>}
      </Container>
      <Container style={{ position: 'relative' }}>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="Enter budget amount"
          value={amount.value}
          onChange={handleInputChange}
        />
        <CurrencySelector
          color="black"
          onChangeAction={handleCurrencyChange}
          style={{ fontSize: '2.7rem', position: 'absolute', right: '0' }}
          currency={formCurrency}
        />
        {!amount.checked && <Warning>Fill out this field!</Warning>}
      </Container>
      <Container>{children}</Container>
      {button && (
        <Button color="green" textColor="white">
          Add
        </Button>
      )}
    </StyledForm>
  );
};

export default Form;
