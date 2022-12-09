import { defaultHeaders } from 'src/constants/http';
import { SCORE_FIELD_NAME, TEAM_NAME } from 'src/constants/LeaderboardConsts';
import { ILeaderboardRequest, Leader } from 'src/store/leaderboard/types';
import { fetchApi } from 'src/store/utils';

const extData = (score: number, login: string | undefined) => {
  return {
    data: { [SCORE_FIELD_NAME]: score, user: login },
    teamName: TEAM_NAME,
    ratingFieldName: SCORE_FIELD_NAME,
  };
};

export const addLeader = async (score: number, login: string | undefined) => {
  return await fetchApi<Leader[]>('/leaderboard', {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(extData(score, login)),
  });
};

export const getLeaderboard = async (data: ILeaderboardRequest) => {
  const res = await fetchApi<Leader[]>('/leaderboard/all', {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(data),
  });
  return res;
};
