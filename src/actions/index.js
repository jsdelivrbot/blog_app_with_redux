export const FETCH_POSTS = 'fetch_posts';
import axios from 'axios';

const ROOT_URL = 'http://reduxblug.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPost() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}
