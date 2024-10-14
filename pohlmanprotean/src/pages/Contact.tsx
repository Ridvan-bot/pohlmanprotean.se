
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Robin Pohlman" />
      <input {...register('email')} placeholder="robin.pohlman@pohlmanprotean.com" />
      <textarea {...register('message')} placeholder="CEO"></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;

