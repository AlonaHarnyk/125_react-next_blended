import axios from "axios";
import type { Post } from "../types/post";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (searchText: string, page: number) => {
  const response = await axios.get<Post[]>("/posts", {
    params: {
      q: searchText,
      _page: page,
      _limit: 8,
    },
  });
  return response.data;
};

export const createPost = async (newPost) => {};

export const editPost = async (newDataPost) => {};

export const deletePost = async (postId) => {};

/* 

GET /posts — отримання списку постів (усі пости). Підтримує query-параметри для фільтрації та пагінації:
q — пошуковий запит (фільтрація по заголовку та тілу поста);
_page — номер сторінки (для пагінації);
_limit — кількість постів на сторінці (для пагінації). 

*/
