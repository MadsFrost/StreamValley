import { verifyYouTube, verifySoundCloud, verifySpotify } from "./verifyLinks";
import { Track } from "../state/player";

const trackMetaData = async (uri: string): Promise<Track | undefined> => {
    if (verifyYouTube(uri)) {
        const ytTrack = await fetch(`http://www.youtube.com/oembed?url=${uri}&format=json`).then((res) => {
            return res.json()
            }).catch((err) => {
            return err;
            })
        return {
            cover: ytTrack.thumbnail_url,
            duration: 0,
            name: ytTrack.title,
            progress: { loaded: 0, loadedSeconds: 0, played: 0, playedSeconds: 0},
            seek: 0,
            uri: uri
        }
    }

    if (verifySoundCloud(uri)) {
        
    } 

    if (verifySpotify(uri)) {

    }
}

export default trackMetaData;