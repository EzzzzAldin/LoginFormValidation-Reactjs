import { useState } from "react";

const useInput = (validateValue) => {
  const [enterdValue, setEnterdValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enterdValue);

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnterdValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnterdValue("");
    setIsTouched(false);
  };

  return {
    value: enterdValue,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
