import { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import { TextFieldWithIcon } from '@/common/components';
import { useInputValueChangeCallback } from '@/common/callbacks';
import { useSignUpCallback } from './callbacks';

const SignUpPage: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <Box
      component="form"
      onSubmit={useSignUpCallback({
        name,
        email,
        password,
        confirmPassword,
      })}
      sx={{
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TextFieldWithIcon
        label="이름"
        placeholder="이름을 입력하세요."
        value={name}
        onChange={useInputValueChangeCallback(setName)}
      />
      <TextFieldWithIcon
        label="이메일"
        placeholder="이메일을 입력하세요."
        value={email}
        onChange={useInputValueChangeCallback(setEmail)}
      />
      <TextFieldWithIcon
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
        value={password}
        onChange={useInputValueChangeCallback(setPassword)}
      />
      <TextFieldWithIcon
        type="password"
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 입력하세요."
        value={confirmPassword}
        onChange={useInputValueChangeCallback(setConfirmPassword)}
      />
      <Button variant="contained" type="submit">
        회원가입
      </Button>
    </Box>
  );
};

export default SignUpPage;
