import axios from 'axios';
import { getToken } from './auth';

export const http = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + getToken()
  }
});

export const api = {
  token: '/api/token',
  blog: '/api/blog',
  images: '/api/images',
};