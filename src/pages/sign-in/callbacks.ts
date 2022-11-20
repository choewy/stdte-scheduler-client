import { authApi } from '@/apis/auth';
import { RoutePath } from '@/common/constants';
import { ExceptionResponse } from '@/core/axios';
import { AxiosError } from 'axios';
import { FormEventHandler, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export type UseSignInCallbackProps = {
  email: string;
  password: string;
};

export const useSignInCallback = ({
  email,
  password,
}: UseSignInCallbackProps): FormEventHandler<HTMLFormElement> => {
  const navigate = useNavigate();

  return useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const { data } = await authApi.signIn({
          email,
          password,
        });

        await authApi.setCookies(data);
        return navigate(RoutePath.Home.url[0], {
          replace: true,
        });
      } catch (e) {
        const error = e as AxiosError<ExceptionResponse>;

        if (error.response?.data) {
          const { status, name } = error.response.data;
          switch (status) {
            case 400:
              return alert('이메일 또는 비밀번호 형식이 잘못되었습니다.');

            case 401:
              return alert('이메일 또는 비밀번호를 확인하세요.');

            case 403:
              switch (name) {
                case '':
                case '':
              }
          }
        }
      }
    },
    [email, password],
  );
};
