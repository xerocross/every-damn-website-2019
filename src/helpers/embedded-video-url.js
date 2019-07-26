export default {
    getURL (isAutoplay) {
        return `https://www.youtube.com/embed/kvzgbOlk3-I?${isAutoplay ? "&autoplay=1" : ""}&controls=0`;
    }
}