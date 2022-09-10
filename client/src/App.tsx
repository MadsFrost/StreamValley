import { Route, Redirect, useLocation } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AuthProvider } from './api/authentication/useAuth';
import { useAuth } from './api/authentication/useAuth';
/* Pages */
import Landing from './pages/Landing';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';

import { Provider } from 'react-redux';
import { store } from './Store';

import Player from './Services/Player';
/* Tailwind styles */
import './theme/tailwind.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
setupIonicReact();

function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect them to the /signin page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they signin, which is a nicer user experience
    // than dropping them off on the home page.
    return <Redirect to="/" from={location.pathname} />;
  }

  return children;
}

const App: React.FC = () => (
  <IonApp className='font-inter text-white bg-app'>
    <Provider store={store}>
      <Player />
      <IonReactRouter>
        <AuthProvider>
        <IonRouterOutlet>
        <RequireAuth>
          <Route path="/xd">
            <h1>123</h1>
          </Route>
        </RequireAuth>
        <Route exact path="/sign-in">
            <SignIn />
          </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
        </IonRouterOutlet>
        </AuthProvider>
      </IonReactRouter>
    </Provider>
  </IonApp>
);

export default App;
