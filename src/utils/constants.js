const GOOGLE_API_KEY = "AIzaSyA62-qo73h3CSzC5EK5CGNLa18Tc6CrKVU";

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 10;

export const SEARCH_RESULT_API = " https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key="+GOOGLE_API_KEY+"&q=";

export const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };