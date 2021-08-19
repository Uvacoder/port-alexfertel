import axios from "axios";

const fetchOpenGraphImage = (url: string) =>
  axios({
    method: "get",
    url: `https://api.microlink.io/?url=${url}&filter=image.url`,
  }).then((response) => response.data);

const microlinkApi = {
  fetchOpenGraphImage,
};

export default microlinkApi;
