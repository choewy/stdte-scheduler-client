import { authApi } from '@/apis/auth';
import { ExceptionResponse } from '@/core/axios';
import { AxiosError } from 'axios';
import {
  ChangeEventHandler,
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

export const SignInPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEvent: (
    setState: Dispatch<SetStateAction<string>>,
  ) => ChangeEventHandler<HTMLInputElement> = (setState) =>
    useCallback((e) => {
      setState(e.target.value);
    }, []);

  const onSubmitEvent: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const { data } = await authApi.signIn({
          email,
          password,
        });

        return authApi.setCookies(data);
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

  return (
    <div>
      <form onSubmit={onSubmitEvent}>
        <input type="email" value={email} onChange={onChangeEvent(setEmail)} />
        <input
          type="password"
          value={password}
          onChange={onChangeEvent(setPassword)}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};
