import { Track } from "../state/player";
export const generateTrack = (uri: string, cover: string, name: string): Track  => {
    return {
        cover: cover,
        duration: 0,
        name: name,
        progress: { 
            loaded: 0,
            loadedSeconds: 0,
            played: 0,
            playedSeconds: 0
        },
        seek: 0,
        uri: uri
    }
}