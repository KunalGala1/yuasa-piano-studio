'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { error } from 'console';
import { set } from 'sanity';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  studentName: string;
  age: string;
  previousMusicExperience: string;
};

const Inquiry = () => {
  const [isSending, setIsSending] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsSending(true);
      // implement send email here
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSending(false);
        console.log('Email sent:', result);
        toast.success('Email sent!');
        reset();
      } else {
        setIsSending(false);
        console.error('Email failed to send:', result);
        toast.error('Email failed to send');
      }
    } catch (error) {
      setIsSending(false);
      toast.error('Network error');
    }
  };

  return (
    <>
      <p
        className={`${
          isSending ? 'block' : 'hidden'
        } fixed z-10 top-1/2 font-bold left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        Sending...
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-8 bg-white rounded shadow p-8'
      >
        {/* Name */}
        <div className={'flex gap-4'}>
          <div className='w-1/2 flex flex-col'>
            <Label htmlFor='firstName'>First Name</Label>
            <input
              {...register('firstName', {
                required: 'Please enter a first name',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Please only use letters',
                },
              })}
              className='border rounded p-3 bg-blue-50/50 hover:border-main'
            />
            {errors['firstName'] && (
              <span className='text-xs text-red-500 mt-1'>
                {errors['firstName']?.message as string}
              </span>
            )}
          </div>
          <div className='w-1/2 flex flex-col'>
            <Label htmlFor='lastName'>Last Name</Label>
            <input
              {...register('lastName', {
                required: 'Please enter a last name',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Please only use letters',
                },
              })}
              className='border rounded p-3 bg-blue-50/50 hover:border-main'
            />
            {errors['lastName'] && (
              <span className='text-xs text-red-500 mt-1'>
                {errors['lastName'].message}
              </span>
            )}
          </div>
        </div>
        {/* Email and Phone Number */}
        <div className={'flex gap-4'}>
          <div className='w-1/2 flex flex-col'>
            <Label htmlFor='email'>Email</Label>
            <input
              {...register('email', {
                required: 'Please enter an email address',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
              className='border rounded p-3 bg-blue-50/50 hover:border-main'
            />
            {errors['email'] && (
              <span className='text-xs text-red-500 mt-1'>
                {errors['email'].message}
              </span>
            )}
          </div>
          <div className='w-1/2 flex flex-col'>
            <Label htmlFor='phoneNumber'>Phone Number</Label>
            <input
              {...register('phoneNumber', {
                required: 'Please enter a phone number',
                pattern: {
                  value: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/i,
                  message: 'Please enter a valid phone number',
                },
              })}
              className='border rounded p-3 bg-blue-50/50 hover:border-main'
            />
            {errors['phoneNumber'] && (
              <span className='text-xs text-red-500 mt-1'>
                {errors['phoneNumber'].message}
              </span>
            )}
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <Label htmlFor='addressLine1'>Address Line 1</Label>
          <input
            {...register('addressLine1', { required: true })}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
          />
          {errors['addressLine1'] && (
            <span className='text-xs text-red-500 mt-1'>
              {errors['addressLine1'].message}
            </span>
          )}
        </div>
        <div className='w-full flex flex-col'>
          <Label htmlFor='addressLine2'>Address Line 2</Label>
          <input
            {...register('addressLine2')}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
          />
        </div>
        {/* City State and Zip */}
        <div className='flex gap-4'>
          <div className='w-1/3 flex flex-col'>
            <Label htmlFor='city'>City</Label>
            <input
              {...register('city', {
                required: 'Please enter a city',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Please only use letters',
                },
              })}
              className='border rounded p-3 bg-blue-50/50 hover:border-main'
            />
            {errors['city'] && (
              <span className='text-xs text-red-500 mt-1'>
                {errors['city'].message}
              </span>
            )}
          </div>
          <div className='w-1/3 flex flex-col'>
            <Label htmlFor='state'>State</Label>
            <input
              {...register('state', {
                required: 'Please enter a state',
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Please only use letters',
                },
              })}
              className='border rounded p-3 bg-blue-50/50 hover:border-main'
            />
            {errors['state'] && (
              <span className='text-xs text-red-500 mt-1'>
                {errors['state'].message}
              </span>
            )}
          </div>
          <div className='w-1/3 flex flex-col'>
            <Label htmlFor='zipCode'>Zip Code</Label>
            <input
              {...register('zipCode', {
                required: 'Please enter a zip code',
                pattern: {
                  value: /^\d{5}(?:[-\s]\d{4})?$/i,
                  message: 'Please enter a valid zip code',
                },
              })}
              className='border rounded p-3 bg-blue-50/50 hover:border-main'
            />
            {errors['zipCode'] && (
              <span className='text-xs text-red-500 mt-1'>
                {errors['zipCode'].message}
              </span>
            )}
          </div>
        </div>
        {/* Student Information */}
        <div className='flex gap-4'>
          <div className='w-1/2 flex flex-col'>
            <Label htmlFor='studentName'>Student Name</Label>
            <input
              {...register('studentName', {
                required: 'Please enter a student name',
                pattern: {
                  value: /^[A-Za-z ]+$/i,
                  message: 'Please only use letters',
                },
              })}
              className='border rounded p-3 bg-blue-50/50 hover:border-main'
            />
            {errors['studentName'] && (
              <span className='text-xs text-red-500 mt-1'>
                {errors['studentName'].message}
              </span>
            )}
          </div>
          <div className='w-1/2 flex flex-col'>
            <Label htmlFor='age'>Age</Label>
            <input
              {...register('age', {
                required: 'Please enter an age',
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: 'Please enter a valid age',
                },
                max: {
                  value: 100,
                  message: 'Please enter a valid age',
                },
              })}
              className='border rounded p-3 bg-blue-50/50 hover:border-main'
            />
            {errors['age'] && (
              <span className='text-xs text-red-500 mt-1'>
                {errors['age'].message}
              </span>
            )}
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <Label htmlFor='previousMusicExperience'>
            Previous Musical Experience
          </Label>
          <textarea
            {...register('previousMusicExperience')}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
            rows={4}
          ></textarea>
        </div>
        <Button theme={'dark'} className='ml-auto' icon={faPaperPlane}>
          <input type='submit' value={'Send'} className='cursor-pointer' />
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};
export default Inquiry;

const Label = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) => {
  return <label className='text-sm mb-1 text-gray-600/90'>{children}</label>;
};
