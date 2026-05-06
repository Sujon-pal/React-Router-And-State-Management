import { useState } from "react";

const useHook = (defaultValue) => {
  const [fieldValue, setFieldValue] = useState(defaultValue);
  const handleFieldOnChange = (e) => {
    setFieldValue(e.target.value);
  };

  return [fieldValue, handleFieldOnChange];
};

export default useHook;
