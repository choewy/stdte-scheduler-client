import { lazy } from 'react';

export const HomePage = lazy(() => import('./home'));
export const AuthPage = lazy(() => import('./auth'));
export const WaitPage = lazy(() => import('./wait'));
export const BlockPage = lazy(() => import('./block'));
export const SignInPage = lazy(() => import('./sign-in'));
export const SignUpPage = lazy(() => import('./sign-up'));
export const SignOutPage = lazy(() => import('./sign-out'));
