import { IonPage } from '@ionic/react';
import Start from '../components/Start/';
import { useAuth } from '../api/authentication/useAuth';
import Layout from '../components/Layout';
const Landing: React.FC = () => {
  const { user } = useAuth();
  return (
    <IonPage className='w-full bg-white text-black'>
      <h1>Hi</h1>
    </IonPage>
  );
};

export default Landing;