import { Route, Redirect, useLocation } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AuthProvider } from './api/authentication/useAuth';
import { useAuth } from './api/authentication/useAuth';
/* Pages */
import Landing from './pages/Landing';
import Layout from './components/Layout';
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
import Test from './components/Test';
import Home from './pages/Home';
import Settings from './pages/Settings';
setupIonicReact();

const App: React.FC = () => (
  <IonApp className='font-inter text-white bg-app'>
    <Provider store={store}>
      <Player />
      <IonReactRouter>
        <AuthProvider>
            <IonRouterOutlet>
              <Layout>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/youtube">
                  <div className='bg-youtube-secondary w-full h-full'>YouTube</div>
                </Route>
                <Route path="/soundcloud">
                  <div className='bg-soundcloud-secondary w-full h-full'>SoundCloud</div>
                </Route>
                <Route path="/spotify">
                  <div className='bg-spotify-secondary w-full h-full'>Spotify</div>
                </Route>
                <Route path="/settings">
                  <Settings />
                </Route>
                <Route path="/test">
                  <Test />
                </Route>
              </Layout>
            </IonRouterOutlet>
        </AuthProvider>
      </IonReactRouter>
    </Provider>
  </IonApp>
);

export default App;