import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CacheBuster from 'react-cache-buster';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import { version } from '../package.json';
import { ENABLE } from '@constants';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const isCacheBusterEnable = import.meta.env.VITE_CACHE_BUSTER === ENABLE ? true : false;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CacheBuster
        currentVersion={version}
        isEnabled={isCacheBusterEnable}
        isVerboseMode={false}
        metaFileDirectory={'.'}
      >
        <App />
      </CacheBuster>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
