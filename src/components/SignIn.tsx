import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../api/authentication/useAuth";
import { IonInput, IonRouterLink, IonPage } from '@ionic/react';
type Inputs = {
  email: string;
  password: string;
};

// nothing is hooked up to a api, login in with whatever you want

export const SignIn = () => {
  const { signIn, loading } = useAuth();
  const { handleSubmit, register } = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = (data) => {
    signIn(data);
  };

  return (
    <div className='h-full w-full'>
        <form onSubmit={handleSubmit(submit)} className='text-center flex flex-col justify-center items-center'>
            <IonInput
            className='w-72 h-54 
            bg-white bg-opacity-0 backdrop-blur-xl rounded
            drop-shadow-lg mb-2'
            {...register("email")} placeholder="email" />
            <IonInput
            className='w-72 h-54 focus:border focus:border-white focus:border-2
            bg-white bg-opacity-0 backdrop-blur-xl rounded 
            drop-shadow-lg'
                {...register("password")}
                placeholder="password"
                type="password"
            />
            <div className='w-72 h-54 mt-6 flex flex-row items-center justify-center'>
              <button disabled={loading} type="submit" className='text-1xl py-3 rounded-md'>
                <span className='mr-1'>Login</span>{'->'}
              </button>
            </div>
        </form>
    </div>
  );
};