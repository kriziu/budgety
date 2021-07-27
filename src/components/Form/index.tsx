import React, { FC } from 'react';

import useForm from '../../hooks/useForm';
import { Input } from '../Input';
import { Container, StyledForm, Label, Warning } from './Elements';
import { Button } from '../Button';

interface FormProps {
  handleSubmit: (title: string, amount: number) => void;
  disabled?: boolean;
  children?: JSX.Element;
  button?: boolean;
  data?: {
    [key in 'title' | 'amount']: { value: string; required: boolean };
  };
  style?: {};
}

const Form: FC<FormProps> = ({
  handleSubmit,
  disabled = false,
  children,
  button = true,
  data,
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

  const { title, amount } = formData;

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

      handleSubmit(title.value, amountNum);

      setFormData({
        title: { ...title, value: '' },
        amount: { ...amount, value: '' },
      });
    }
  };

  return (
    <StyledForm
      onSubmit={handleSubmitForm}
      noValidate
      autoComplete="off"
      style={style}
    >
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
      <Container>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          placeholder="Enter budget amount"
          value={amount.value}
          onChange={handleInputChange}
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
