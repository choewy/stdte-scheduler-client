import { UserType } from '../auth';

export type TeamListRow = {
  id: number;
  name: string;
  userCount: number;
  teamTaskCount: number;
  globalTaskCount: number;
};

export type TeamListResponse = {
  count: number;
  rows: Array<TeamListRow>;
};

export type TeamTaskResponse = {
  id: number;
  code: string;
  name: string;
  type: 'global' | 'team';
  revenue: string | null;
  summary: string | null;
  status: 'staging' | 'abandon' | 'done' | 'after-service';
  startAt: string | null;
  endAt: string | null;
  warrantyAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TeamUserResponse = {
  id: number;
  type: UserType;
  email: string;
  name: string;
};

export type TeamResponse = {
  id: number;
  name: string;
  tasks: Array<TeamTaskResponse>;
  users: Array<TeamUserResponse>;
};
