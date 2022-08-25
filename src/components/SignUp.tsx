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
      <form onSubmit={handleSubmit(submit)}>
          Signup

          <IonInput {...register("name")} placeholder="Name" />
          <IonInput {...register("email")} placeholder="Email" />
          <IonInput
            {...register("password")}
            placeholder="Password"
            type="password"
          />
            Already a user?{" "}
            <IonRouterLink color={"blue"} href="/sign-in">
            Sign in
            </IonRouterLink>
            <button disabled={loading} type="submit">
              Sign up
            </button>
      </form>
    </div>
  );
};