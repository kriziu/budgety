import { Dispatch, SetStateAction, useState } from 'react';

interface returnedObject {
  [key: string]: { value: string; required: boolean; checked: boolean };
}

const useForm = (initialState: {
  [key: string]: { value: string; required: boolean };
}): [
  returnedObject,
  Dispatch<SetStateAction<returnedObject>>,
  (name: string, bool?: boolean) => void,
  (e: React.ChangeEvent<HTMLInputElement>) => void
] => {
  let newState: returnedObject = {};

  for (const [key, value] of Object.entries(initialState)) {
    newState = { ...newState, [key]: { ...value, checked: true } };
  }

  const [formData, setFormData] = useState(newState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const checked = formData[e.target.name].required
      ? e.target.value
        ? true
        : false
      : true;

    setFormData({
      ...formData,
      [e.target.name]: {
        ...formData[e.target.name],
        value: e.target.value,
        checked: checked,
      },
    });
  };

  const toggleChecked = (name: string, bool: boolean = false): void => {
    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        checked: bool,
      },
    });
  };
  return [formData, setFormData, toggleChecked, handleInputChange];
};

export default useForm;
