export const TEAM_NAME = 'team_01';
export const SCORE_FIELD_NAME = 'huggy_wuggy_score';

const LEADERBORD_REQUEST_LIMIT = 100;

export const leaderboardRequestData = {
  teamName: TEAM_NAME,
  ratingFieldName: SCORE_FIELD_NAME,
  cursor: 0,
  limit: LEADERBORD_REQUEST_LIMIT,
};
