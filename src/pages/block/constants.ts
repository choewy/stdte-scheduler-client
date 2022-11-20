export type StepType = {
  title: string;
  description: string;
  error?: boolean;
};

export const steps: StepType[] = [
  {
    title: '가입 거절',
    description: '관리자가 가입 승인을 거절하였습니다.',
    error: true,
  },
  {
    title: '검토 요청',
    description: '관리자에게 문의바랍니다.',
  },
  {
    title: '계정 복구',
    description:
      '관리자에게 가입 승인을 받은 직후부터 서비스 이용이 가능합니다.',
  },
];
