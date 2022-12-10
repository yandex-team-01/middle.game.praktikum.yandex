export const allRoutes = [
  '/',
  '/game',
  '/auth',
  '/auth/reg',
  '/loadinggame',
  '/leaders', // происходит редирект на "/" т к auth=false
  '/forum', // происходит редирект на "/" т к auth=false
  '/forum/topic', // происходит редирект на "/" т к auth=false
  '/forum/createtopic', // происходит редирект на "/" т к auth=false
  '/settings', // происходит редирект на "/" т к auth=false
  '/settings/edit', // происходит редирект на "/" т к auth=false
  '/settings/password', // происходит редирект на "/" т к auth=false
  '/500',
  '/404',
  '*',
];
