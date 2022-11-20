import { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import { Email as EmailIcon, Lock as PasswordIcon } from '@mui/icons-material';
import { TextFieldWithIcon } from '@/common/components';
import { useInputValueChangeCallback } from '@/common/callbacks';
import { useSignInCallback } from './callbacks';

const SignInPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Box
      component="form"
      onSubmit={useSignInCallback({ email, password })}
      sx={{
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TextFieldWithIcon
        label="이메일"
        Icon={EmailIcon}
        placeholder="이메일을 입력하세요."
        value={email}
        onChange={useInputValueChangeCallback(setEmail)}
      />
      <TextFieldWithIcon
        type="password"
        label="비밀번호"
        Icon={PasswordIcon}
        placeholder="비밀번호를 입력하세요."
        value={password}
        onChange={useInputValueChangeCallback(setPassword)}
      />
      <Button variant="contained" type="submit">
        로그인
      </Button>
    </Box>
  );
};

export default SignInPage;
