import { FC } from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { steps } from './constants';

const WaitPage: FC = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Alert
        severity="info"
        sx={{
          width: '100%',
          maxWidth: '400px',
          mt: '30px',
        }}
      >
        <AlertTitle>가입 승인 대기</AlertTitle>
        가입 승인 대기 중입니다 - <strong>관리자에게 문의하세요.</strong>
      </Alert>
      <Paper
        sx={{
          width: '100%',
          maxWidth: '400px',
          py: '40px',
          px: '40px',
          mt: '40px',
          boxSizing: 'border-box',
        }}
      >
        <Stepper activeStep={1} orientation="vertical">
          {steps.map((step) => (
            <Step key={JSON.stringify(step)}>
              <StepLabel>
                <Typography>{step.title}</Typography>
              </StepLabel>
              <StepContent>
                <Typography variant="body2">{step.description}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Paper>
    </Box>
  );
};

export default WaitPage;
