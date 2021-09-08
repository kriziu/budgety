import React, { FC, useState, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import useForm from '../../hooks/useForm';
import { Input } from '../Input';
import {
  Container,
  StyledForm,
  Warning,
  MinPlus,
  MinPlusIcon,
} from './Elements';
import { Label } from '../Input';
import { Button } from '../Button';
import CurrencySelector from '../CurrencySelector';
import { RootState } from '../../store';
import { Header2 } from '../Header';

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
  pageTitle?: string;
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
  pageTitle,
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
  const [minus, setMinus] = useState(false);
  const clicked = useRef(false);

  const { title, amount } = formData;

  useEffect(() => {
    currency && setFormCurrency(currency);
  }, [currency]);

  useEffect(() => {
    !currency && setFormCurrency(primaryCurrency);
  }, [primaryCurrency, currency]);

  useEffect(() => {
    if (parseFloat(amount.value) < 0) {
      setFormData({
        title: { ...title },
        amount: {
          ...amount,
          value: (parseFloat(amount.value) * -1).toFixed(),
        },
      });
      setMinus(true);
      clicked.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      let amountNum = parseFloat(amount.value);

      if (minus && amountNum > 0) amountNum = amountNum * -1;

      handleSubmit(title.value, amountNum, formCurrency);

      setFormData({
        title: { ...title, value: '' },
        amount: { ...amount, value: '' },
      });

      setMinus(false);
      clicked.current = false;
    }
  };

  const handleCurrencyChange = (e: string) => {
    setFormCurrency(e);
  };

  const handleInputChangeNew = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseFloat(e.target.value) < 0) setMinus(true);
    else if (parseFloat(e.target.value) >= 0 && !clicked.current)
      setMinus(false);
    handleInputChange(e);
  };

  const handleMinPlusClick = () => {
    setMinus(!minus);
    if (minus) clicked.current = false;
    else clicked.current = true;
  };

  return (
    <StyledForm
      onSubmit={handleSubmitForm}
      noValidate
      autoComplete="off"
      style={style}
    >
      {pageTitle && (
        <Container>
          <Header2>{pageTitle}</Header2>
        </Container>
      )}
      {childrenBefore && <Container>{childrenBefore}</Container>}
      <Container>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Enter title"
          value={title.value}
          onChange={handleInputChange}
        />
        {!title.checked && <Warning>Fill out this field!</Warning>}
      </Container>
      <Container style={{ position: 'relative' }}>
        <Label htmlFor="amount">Amount</Label>
        <MinPlus onClick={handleMinPlusClick}>
          <MinPlusIcon minus={!minus}></MinPlusIcon>
        </MinPlus>
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="Enter amount"
          value={amount.value}
          onChange={handleInputChangeNew}
          style={{ padding: '1rem 5rem' }}
        />
        <div
          style={{
            display: 'inline-block',
            width: '10rem',
            fontSize: '2rem',
            position: 'absolute',
            right: '0',
          }}
        >
          <CurrencySelector
            color="black"
            onChangeAction={handleCurrencyChange}
            currency={formCurrency}
            container={false}
          />
        </div>
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
