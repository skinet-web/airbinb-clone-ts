'use client'

import { useCallback, useState} from 'react'
import Modal from './Modal'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Heading from '../Heading'
import Input from '../inputs/Input'
import {toast} from 'react-hot-toast'
import Button from '../Button'
import {signIn}  from 'next-auth/react'
import {useRouter} from 'next/navigation'

const LoginModal = () => {
 
  const router = useRouter()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)
  const {
    register, 
    handleSubmit, 
    formState: {
    errors,
  }
} = useForm<FieldValues>({
    defaultValues: {
        name: '',
        email: '',
        password: ''
    }
});

const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);

      if(callback?.ok) {
        toast.success('Logged in');
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error)
      }
    })
}

const bodyContent = (
    <div className='flex flex-col gap-4'>
        <Heading 
        title = 'Welcome to Airbnb'
        subtitle='Login in your account!'
        />
        <Input
        id="email"
        label="Email"
        type="email"        
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />     
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
)

const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
        <hr />
        <Button 
            label='Continue with Google'
            icon={FcGoogle}
            outline
            onClick={() => {}}
        />
        <Button 
            label='Continue with Github'
            icon={AiFillGithub}
            outline
            onClick={() => signIn('github')}
        />
        <div className=' 
        text-neutral-500 
        text-center 
        mt-4 
        font-light'>
            <div className='
            justify-center 
            flex 
            flex-row 
            items-center 
            gap-2'>
                <div>
                    Already have an account?
                </div>
                <div 
                onClick={loginModal.onOpen}
                className='
                font-semibold
                text-neutral-800 
                cursor-pointer 
                hover:underline'
                >
                    Log in
                </div>    
            </div>
            
        </div>
    </div>
)

  return (
    <div>
        <Modal 
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title='Login'
            actionLabel='Continue'
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    </div>
  )
}

export default LoginModal