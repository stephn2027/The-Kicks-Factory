import { useEffect, useState } from 'react';

export default function useForm(initialState = {}) {
  const [inputs, setInputs] = useState(initialState);
  const initialValues = Object.keys(initialState).join('');

  useEffect(() => {
    setInputs(initialState);
  }, [initialValues]);

  function handleChange(e) {
    let { name, value, type } = e.target;
    if (type === 'number') {
      value = Number(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({ ...inputs, [name]: value });
  }

  function resetForm() {
    setInputs(initialState);
  }
  function clearForm() {
    setInputs(
      Object.fromEntries(
        Object.entries(inputs).map(([key, value]) => [key, ''])
      )
    );
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
