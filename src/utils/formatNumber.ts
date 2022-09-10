export const formatHHMMSS = (s: number) => {
    const minutes = Math.floor(s/60);
    const seconds = `${Math.floor(s%60)}`.length === 1 ? `0${Math.floor(s%60)}` : `${Math.floor(s%60)}`; 
    return `${minutes}:${seconds}`;
}