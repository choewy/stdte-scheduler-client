import './index.css';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { lazy, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppSuspense } from './common/components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const App = lazy(() => import('@/app'));

root.render(
  <RecoilRoot>
    <Suspense fallback={<AppSuspense open={true} />}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
