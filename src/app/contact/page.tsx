'use client';
/* eslint-disable import/no-extraneous-dependencies */
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div className='flex flex-row justify-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-11/12'>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='mb-3 block text-base font-medium text-richBlack'>
            Full Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-oxfordBlue outline-none focus:border-yInMnBlue focus:shadow-md'
            {...register('name', { required: true })}/>
        </div>
        <div className='mb-5'>
          <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-richBlack'
        >
            Email Address
          </label>
          <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-oxfordBlue outline-none focus:border-yInMnBlue focus:shadow-md'
          {...register('email', { required: true })}
        />
        </div>
        <div className='mb-5'>
          <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-richBlack'
        >
            Message
          </label>
          <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-oxfordBlue outline-none focus:border-yInMnBlue focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
        </div>
        <div className='flex flex-row justify-center'>
          <button className='hover:bg-silverLakeBlue rounded-md bg-yInMnBlue py-3 px-8 text-base font-semibold text-platinum outline-none'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}