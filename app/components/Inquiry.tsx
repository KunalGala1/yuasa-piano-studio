'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('firstName'));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-8 bg-white rounded shadow p-8'
    >
      {/* Name */}
      <div className={'flex gap-4'}>
        <div className='w-1/2 flex flex-col'>
          <Label htmlFor='firstName'>First Name</Label>
          <input
            {...(register('firstName'), { required: true })}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
          />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className='w-1/2 flex flex-col'>
          <Label htmlFor='lastName'>Last Name</Label>
          <input
            {...(register('lastName'), { required: true })}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
          />
          {errors.lastName && <span>This field is required</span>}
        </div>
      </div>
      {/* Email and Phone Number */}
      <div className={'flex gap-4'}>
        <div className='w-1/2 flex flex-col'>
          <Label htmlFor='email'>Email</Label>
          <input
            {...(register('email'), { required: true })}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className='w-1/2 flex flex-col'>
          <Label htmlFor='phoneNumber'>Phone Number</Label>
          <input
            {...(register('phoneNumber'), { required: true })}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
          />
          {errors.phoneNumber && <span>This field is required</span>}
        </div>
      </div>
      <div className='w-full flex flex-col'>
        <Label htmlFor='addressLine1'>Address Line 1</Label>
        <input
          {...register('addressLine1', { required: true })}
          className='border rounded p-3 bg-blue-50/50 hover:border-main'
        />
        {errors.addressLine1 && <span>This field is required</span>}
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
            {...(register('city'), { required: true })}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
          />
          {errors.city && <span>This field is required</span>}
        </div>
        <div className='w-1/3 flex flex-col'>
          <Label htmlFor='state'>State</Label>
          <input
            {...(register('state'), { required: true })}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
          />
          {errors.state && <span>This field is required</span>}
        </div>
        <div className='w-1/3 flex flex-col'>
          <Label htmlFor='zipCode'>Zip Code</Label>
          <input
            {...(register('zipCode'), { required: true })}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
          />
          {errors.zipCode && <span>This field is required</span>}
        </div>
      </div>
      {/* Student Information */}
      <div className='flex gap-4'>
        <div className='w-1/2 flex flex-col'>
          <Label htmlFor='studentName'>Student Name</Label>
          <input
            {...(register('studentName'), { required: true })}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
          />
          {errors.studentName && <span>This field is required</span>}
        </div>
        <div className='w-1/2 flex flex-col'>
          <Label htmlFor='age'>Age</Label>
          <input
            {...(register('age'), { required: true })}
            className='border rounded p-3 bg-blue-50/50 hover:border-main'
          />
          {errors.age && <span>This field is required</span>}
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
