import { teamApi, TeamResponse, TeamListResponse } from '@/apis/team';
import { ExceptionResponse } from '@/core/axios';
import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';

export const useGetTeamList = () => {
  const [teams, setTeams] = useState<TeamListResponse>({
    count: 0,
    rows: [],
  });

  const apiCall = useCallback(async () => {
    try {
      const { data } = await teamApi.getTeams();
      setTeams(data);
    } catch (e) {
      const error = e as AxiosError<ExceptionResponse>;
      console.log(error);
    }
  }, []);

  useEffect(() => {
    apiCall();
  }, []);

  return teams;
};

export const useGetTeam = (teamId?: string) => {
  const [team, setTeam] = useState<TeamResponse | null>(null);

  const apiCall = useCallback(async () => {
    if (!teamId) {
      return;
    }

    try {
      const { data } = await teamApi.getTeam(teamId);
      setTeam(data);
    } catch (e) {
      const error = e as AxiosError<ExceptionResponse>;
      console.log(error);
    }
  }, []);

  useEffect(() => {
    apiCall();
  }, []);

  return team;
};
