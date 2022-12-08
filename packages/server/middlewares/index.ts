import type { RequestHandler } from 'express';
import cookieParserMiddleware from 'cookie-parser';

export const cookieParser: RequestHandler = cookieParserMiddleware();
