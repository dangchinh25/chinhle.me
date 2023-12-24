'use client';
/* eslint-disable import/no-extraneous-dependencies */
import { SendEmailData } from '@/types';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
  const { register, handleSubmit } = useForm<SendEmailData>();

  const onSubmit = async (data: SendEmailData)=> {
    console.log(data);

    const res = await fetch('/api/email', { method: 'POST', body: JSON.stringify(data) });
  
    console.log(res);
  };

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