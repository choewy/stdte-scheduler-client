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
import { FC } from 'react';
import { steps } from './constants';

const BlockPage: FC = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Alert
        severity="error"
        sx={{
          width: '100%',
          maxWidth: '400px',
          mt: '30px',
        }}
      >
        <AlertTitle>가입 승인 거절</AlertTitle>
        가입 승인이 거절되었습니다 - <strong>관리자에게 문의하세요.</strong>
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
        <Stepper activeStep={0} orientation="vertical">
          {steps.map((step) => (
            <Step key={JSON.stringify(step)}>
              <StepLabel error={step.error}>
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

export default BlockPage;
