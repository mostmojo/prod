import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 7c1b6705c431388f9ab50f8ac5e72233a47f8f6d95f0309232fcd4f5e9073251"
  }
});
