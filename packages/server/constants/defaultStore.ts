export const defaultStore = {
  auth: { checkAuth: false, auth: false, user: null, loading: false },
  error: { errorList: [] },
  forum: {
    activeTopic: undefined,
    topics: {},
  },
  users: {
    user: null,
    loading: false,
  },
};
