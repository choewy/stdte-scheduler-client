import '@/index.css';

import ReactDOM from 'react-dom/client';
import reportWebVitals from '@/reportWebVitals';
import { lazy, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppBackDrop } from '@/common/components';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const App = lazy(() => import('@/app'));
const AppNavBar = lazy(() => import('@/app/app-nav-bar'));
const AppSideBar = lazy(() => import('@/app/app-side-bar'));

root.render(
  <RecoilRoot>
    <Suspense fallback={<AppBackDrop open={true} />}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HelmetProvider>
          <AppNavBar />
          <AppSideBar />
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </HelmetProvider>
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
