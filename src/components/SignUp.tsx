import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../api/authentication/useAuth";
import { IonInput, IonRouterLink } from '@ionic/react';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

// nothing is hooked up to a api, login in with whatever you want

export const SignUp = () => {
  const { signIn, loading } = useAuth();
  const { handleSubmit, register } = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = (data) => {
    signIn(data);
  };

  return (
    <div className='grid-cols-1 place-items-center w-full'>
      <p className='text-gray-200'>Already a user?{" "} <IonRouterLink className='font-bold text-white pl-2' href="/sign-in">
            Sign in
            </IonRouterLink></p>
      <form onSubmit={handleSubmit(submit)}>
          <IonInput className='w-72 h-54 focus:border focus:border-white focus:border-2
            bg-white bg-opacity-0 backdrop-blur-xl rounded 
            drop-shadow-lg' {...register("name")} placeholder="Name" />
          <IonInput className='w-72 h-54 focus:border focus:border-white focus:border-2
            bg-white bg-opacity-0 backdrop-blur-xl rounded 
            drop-shadow-lg' {...register("email")} placeholder="Email" />
          <IonInput className='w-72 h-54 focus:border focus:border-white focus:border-2
            bg-white bg-opacity-0 backdrop-blur-xl rounded 
            drop-shadow-lg'
            {...register("password")}
            placeholder="Password"
            type="password"
          />
            <div className='w-72 h-54 mt-6 flex flex-row items-center justify-center'>
              <button disabled={loading} type="submit" className='text-1xl py-3 rounded-md'>
                <span className='mr-1'>Signup</span>{'->'}
              </button>
            </div>
      </form>
    </div>
  );
};