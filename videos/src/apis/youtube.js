import axios from "axios";

const KEY = "AIzaSyDl7fcFF2lOpKBozK6GkmWXRo2JVaFa27U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
