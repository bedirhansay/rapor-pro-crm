import { QueryClient } from '@tanstack/react-query';
import globalAxios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './App.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      throwOnError: false,
    },
  },
});

globalAxios.interceptors.request.use(
  async (config) => {
    NProgress.start();
    let token = localStorage.getItem('authToken');
    if (token) {
      token = token.replace(/^"|"$/g, '');
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

globalAxios.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  function (error) {
    NProgress.done();
    if (error.response.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error.response);
  }
);

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
