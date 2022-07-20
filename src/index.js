import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import PostsProvider from './contexts/posts-contex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter >
      <PostsProvider>
        <AuthProvider />
      </PostsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
