import { lazy } from 'react';

export const HomePage = lazy(() => import('./home'));
export const AuthPage = lazy(() => import('./auth'));
export const WaitPage = lazy(() => import('./wait'));
export const BlockPage = lazy(() => import('./block'));
export const SignInPage = lazy(() => import('./sign-in'));
export const SignUpPage = lazy(() => import('./sign-up'));
export const SignOutPage = lazy(() => import('./sign-out'));
export const UsersPage = lazy(() => import('./users'));
export const TeamsPage = lazy(() => import('./teams'));
export const TeamPage = lazy(() => import('./teams/[:teamId]'));
