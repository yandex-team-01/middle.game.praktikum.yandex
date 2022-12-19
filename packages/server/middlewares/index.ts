import type { RequestHandler } from 'express';
import cookieParserMiddleware from 'cookie-parser';
import i18nextMiddleware from 'i18next-http-middleware';
import Backend from 'i18next-fs-backend';

export const cookieParser: RequestHandler = cookieParserMiddleware();

export { auth } from './auth';
export const i18nMiddleware = i18nextMiddleware;
export const backend = Backend;
