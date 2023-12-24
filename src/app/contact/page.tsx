'use client';
import SubmitButton from '@/components/SubmitButton';
/* eslint-disable import/no-extraneous-dependencies */
import { SendEmailData } from '@/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSendEmailSuccess, setIsSendEmailSuccess] = useState<boolean | null>(null);
  const { register, handleSubmit } = useForm<SendEmailData>();

  const onSubmit = async (data: SendEmailData)=> {
    setIsLoading(true);
    const res = await fetch('/api/email', { method: 'POST', body: JSON.stringify(data) });
    setIsLoading(false);

    if (res.status === 200) {
      setIsSendEmailSuccess(true);
    } else {
      setIsSendEmailSuccess(false);
    }
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
        <div className='flex flex-row justify-center mb-5'>
          <SubmitButton isLoading={isLoading} isSuccess={isSendEmailSuccess}/>
        </div>
        
        { isSendEmailSuccess !== null 
          && !isSendEmailSuccess
          && <div className='flex flex-row justify-center'>
            <p className='text-silverLakeBlue'>Failed to send message, please try again later.</p>
          </div>}
      </form>
    </div>
  );
}