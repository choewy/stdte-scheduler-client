export type StepType = {
  title: string;
  description: string;
};

export const steps: StepType[] = [
  {
    title: '회원가입 신청',
    description: '회원가입 신청을 합니다.',
  },
  {
    title: '가입 승인 대기',
    description: '관리자의 승인이 필요합니다.',
  },
  {
    title: '가입 승인 완료',
    description:
      '관리자에게 가입 승인을 받은 직후부터 서비스 이용이 가능합니다.',
  },
];
