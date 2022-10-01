import { useState } from 'react';

export default function useInputErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const alreadyExists = errors.find((error) => error.field === field);

    if (alreadyExists) {
      removeError(field);
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(field) {
    setErrors((prevState) => (
      prevState.filter((error) => error.field !== field)));
  }

  function getMessageError(field) {
    return errors.find((error) => error.field === field)?.message;
  }

  return {
    errors, setError, removeError, getMessageError,
  };
}
