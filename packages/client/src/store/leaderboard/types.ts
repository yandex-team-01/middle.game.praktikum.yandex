import { SCORE_FIELD_NAME } from 'src/constants/LeaderboardConsts';

export interface Leader {
  data: {
    [SCORE_FIELD_NAME]: number;
    user: string;
  };
}

export interface ILeaderBoardState {
  leaderboard: Leader[];
  isLoading: boolean;
}

export interface IScore {
  data: {
    [SCORE_FIELD_NAME]: number;
    user: string;
  };
  ratingFieldName: string;
  teamName: string;
}

export interface ILeaderboardRequest {
  ratingFieldName: string;
  cursor: number;
  limit: number;
}
