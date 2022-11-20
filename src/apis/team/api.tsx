import { AxiosInstance, HttpMethod } from '@/core/axios';
import { AxiosResponse } from 'axios';
import { TeamListResponse, TeamResponse } from './types';

class TeamApi extends AxiosInstance {
  private readonly URL = '/teams';

  async getTeams(): Promise<AxiosResponse<TeamListResponse>> {
    return this.request({
      method: HttpMethod.Get,
      url: this.URL,
    });
  }

  async getTeam(teamId: string): Promise<AxiosResponse<TeamResponse>> {
    return this.request({
      method: HttpMethod.Get,
      url: `${this.URL}/${teamId}`,
    });
  }
}

export const teamApi = new TeamApi();
