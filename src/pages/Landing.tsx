import { IonContent, IonPage } from '@ionic/react';
import Start from '../components/Start/';
import { useAuth } from '../api/authentication/useAuth';
const Landing: React.FC = () => {
  const { user } = useAuth();
  return (
    <IonPage>
      {user ? <h1>Logged In</h1> : <Start />}
    </IonPage>
  );
};

export default Landing;