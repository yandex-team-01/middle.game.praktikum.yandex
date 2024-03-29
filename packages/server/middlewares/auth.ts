import axios from 'axios';
import { userRepos } from '../db';
import type { NextFunction, Request, Response } from 'express';

const PRAKTIKUM_AUTH_ENDPOINT = 'https://ya-praktikum.tech/api/v2/auth/user';

export async function auth(req: Request, res: Response, next: NextFunction) {
  const authData = {
    authCookie: req.cookies.authCookie,
    uuid: req.cookies.uuid,
  };

  const cookies = Object.entries(authData)
    .map(([key, value]) => `${key}=${value}`)
    .join(';');

  const themeCookie = req.cookies.themeCookie;

  try {
    const { data } = await axios.get(PRAKTIKUM_AUTH_ENDPOINT, {
      headers: { Cookie: cookies },
    });
    res.locals.user = data;
  } catch (error) {
    res.locals.user = null;
  }

  try {
    const user = await userRepos.get(res.locals.user?.id);
    if (themeCookie) {
      res.locals.theme = JSON.parse(themeCookie);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      res.locals.theme = JSON.parse(user?.theme);
    }
  } catch (error) {
    if (themeCookie) {
      res.locals.theme = JSON.parse(themeCookie);
    }
  }

  next();
}
