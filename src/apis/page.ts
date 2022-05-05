import axios from "axios";

const postAPI = axios.create({
  baseURL: "https:/hn.algolia.com/",
});

postAPI.interceptors.response.use((response) => {
    return response.data.hits;
});

export const getPageInfo = (pageNumber:number) => {
  return postAPI.get(`api/v1/search_by_date?query=story&page=${pageNumber}`);
};
