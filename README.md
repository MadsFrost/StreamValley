# Project StreamValley
StreamValley is meant to be a cross-platform music streaming app. With the same features and capabilities as YouTube, SoundCloud and Spotify, but with mixed search results and playlist features and a generalized player.

## Todo - Player
- [ ] Create basic player UI
    - [x] Play/Pause buttons
    - [ ] Forward/Skip buttons
    - [x] Slider with draggable seek 
    functionality
    - [ ] Diverse animations
    - [ ] Album/Artist picture
    - [ ] Volume slider
    - [ ] Shuffle button
    - [ ] Minimize player button
- [ ] Playlist functionality
    - [x] Create typed variants for a playlist
    - [ ] Optimized player loader when switching between platforms
    - [ ] Create shuffle feature

- [ ] General UI
    - [ ] Create queue UI design and redux slice
    - [ ] Create search and api features


## Docker / Run
### Build Image
``` docker build -t stream-valley-client:latest . ```
## Run Image
```docker run -it --rm -p 80:80 stream-valley-client:latest```
