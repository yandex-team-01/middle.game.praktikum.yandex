import { defaultHeaders } from 'src/constants/http';
import { SCORE_FIELD_NAME, TEAM_NAME } from 'src/constants/LeaderboardConsts';
import {
  ILeaderboardRequest,
  IScore,
  Leader,
} from 'src/store/leaderboard/types';
import { fetchApi } from 'src/store/utils';

const prepareLeaderboardRequestData = (
  score: number,
  login: string
): IScore => {
  return {
    data: { [SCORE_FIELD_NAME]: score, user: login },
    teamName: TEAM_NAME,
    ratingFieldName: SCORE_FIELD_NAME,
  };
};

export const addLeader = (score: number, login = '') => {
  return fetchApi<Leader[]>('/leaderboard', {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(prepareLeaderboardRequestData(score, login)),
  });
};

export const getLeaderboard = (data: ILeaderboardRequest) => {
  const res = fetchApi<Leader[]>('/leaderboard/all', {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(data),
  });
  return res;
};
