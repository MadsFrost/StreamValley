import { IonPage } from '@ionic/react';
import Start from '../components/Start/';
import { useAuth } from '../api/authentication/useAuth';
import Home from '../components/Home';
const Landing: React.FC = () => {
  const { user } = useAuth();
  return (
    <IonPage className='bg-app bg-cover bg-center'>
      {user ? <Home /> : <Start />}
    </IonPage>
  );
};

export default Landing;