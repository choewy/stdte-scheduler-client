import { authApi, SignUpBodyType } from '@/apis/auth';
import { useSetSnakbarCallback } from '@/common/callbacks';
import { RoutePath } from '@/common/constants';
import { ExceptionResponse } from '@/core/axios';
import { AxiosError } from 'axios';
import { FormEventHandler, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSignUpCallback = ({
  name,
  email,
  password,
  confirmPassword,
}: SignUpBodyType): FormEventHandler<HTMLFormElement> => {
  const navigate = useNavigate();
  const setSnackbar = useSetSnakbarCallback();

  return useCallback(
    async (e) => {
      e.preventDefault();

      if (name === '') {
        return setSnackbar('이름을 입력하세요.');
      }

      if (email === '') {
        return setSnackbar('이메일을 입력하세요.');
      }

      if (password === '') {
        return setSnackbar('비밀번호를 입력하세요.');
      }

      if (password !== confirmPassword) {
        return setSnackbar('비밀번호가 일치하지 않습니다.');
      }

      try {
        const { data } = await authApi.signUp({
          name,
          email,
          password,
          confirmPassword,
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
          }
        }
      }
    },
    [name, email, password, confirmPassword],
  );
};
