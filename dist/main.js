var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
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
globalAxios.interceptors.request.use((config) => __awaiter(void 0, void 0, void 0, function* () {
    NProgress.start();
    let token = localStorage.getItem('authToken');
    if (token) {
        token = token.replace(/^"|"$/g, '');
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}), (error) => {
    NProgress.done();
    return Promise.reject(error);
});
globalAxios.interceptors.response.use((response) => {
    NProgress.done();
    return response;
}, function (error) {
    NProgress.done();
    if (error.response.status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
    }
    return Promise.reject(error.response);
});
createRoot(document.getElementById('root')).render(_jsx(BrowserRouter, { children: _jsx(StrictMode, { children: _jsx(App, {}) }) }));
