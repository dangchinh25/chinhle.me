'use client';
import SubmitButton from '@/components/SubmitButton';
/* eslint-disable import/no-extraneous-dependencies */
import { SendEmailData } from '@/types';
import { useState } from 'react';
import { Nav } from '@/components/nav';
import { SocialLinks } from '@/components/social-links';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';


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
    <div className='min-h-screen bg-background text-foreground'>
      <Nav />
      <main className='container max-w-2xl py-12'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
            control={form.control}
            name='fullName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder='Full Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder='example@domain.com' type='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Type your message'
                    className='min-h-[150px] resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
            <Button type='submit' className='w-full'>
              Submit
            </Button>
          </form>
        </Form>
        <SocialLinks />
      </main>
    </div>
  );
}