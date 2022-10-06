import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from "react";
  import { useLocation, useHistory } from "react-router-dom";
  import { getTokenFromUrl } from "../../utils/getTokenFromUrl";
  import { loginUrl } from './spotify';
  import SpotifyWebApi from 'spotify-web-api-js';
  interface User {}

  type AuthContextType = {
    // We defined the user type in `index.d.ts`, but it's
    // a simple object with email, name and password.
    user?: User;
    error?: any;
    signInSpotify: () => void;
    signOutSpotify: () => void;
  };
  const LS_KEY = 'spotify-token'
  
  const AuthContext = createContext<AuthContextType>({} as AuthContextType);
  // Export the provider as we need to wrap the entire app with it
  const spotify = new SpotifyWebApi();

  export function AuthProvider({
    children,
  }: {
    children: ReactNode;
  }): JSX.Element {
    const [user, setUser] = useState<User>();
    const [error, setError] = useState<any>();
    const history = useHistory();
  
    // Flags the component loading state and posts the login
    // data to the server.
    //
    // An error means that the email/password combination is
    // not valid.
    //
    // Finally, just signal the component that loading the
    // loading state is over.
    // Call the logout endpoint and then remove the user
    // from the state.
    function signInSpotify() {
      window.location.href = loginUrl;
    }
    function signOutSpotify() {
      setUser(() => {
        localStorage.removeItem(LS_KEY);
        return undefined;
      });
      history.push("/", { replace: true });
      // sessionsApi.logout().then(() => setUser(undefined));
    }
  
    // Make the provider update only when it should.
    // We only want to force re-renders if the user,
    // loading or error states change.
    //
    // Whenever the `value` passed into a provider changes,
    // the whole tree under the provider re-renders, and
    // that can be very costly! Even in this case, where
    // you only get re-renders when logging in and out
    // we want to keep things very performant.
    useEffect(() => {
      if (localStorage.getItem(LS_KEY) !== null) {
        spotify.setAccessToken(localStorage.getItem(LS_KEY));
        spotify.getMe().then((user) => {
          setUser(user);
        })
      }
      if (window.location.href.includes('#access_token')) {
        const _SPOTIFY_TOKEN = getTokenFromUrl().access_token;
        window.location.hash = "";
        if (_SPOTIFY_TOKEN) {
          spotify.setAccessToken(_SPOTIFY_TOKEN);
          spotify.getMe().then((user) => {
            console.log(user);
            setUser(user);
          })
          localStorage.setItem(LS_KEY, _SPOTIFY_TOKEN);
        }
      }
    }, [])
    const getUserFromToken = () => {
      spotify.getMe().then((user) => {
        setUser(user);
      })
    }
    const memoedValue = useMemo(
      () => ({
        user,
        error,
        signInSpotify,
        signOutSpotify,
      }),
      [user, error]
    );
  
    // We only want to render the underlying app after we
    // assert for the presence of a current user.
    return (
      <AuthContext.Provider value={memoedValue}>
        {/* {children} */}
        {children}
      </AuthContext.Provider>
    );
  }
  
  // Let's only export the `useAuth` hook instead of the context.
  // We only want to use the hook directly and never the context component.
  export function useAuth() {
    return useContext(AuthContext);
  }