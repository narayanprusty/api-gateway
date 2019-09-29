import jwt from 'express-jwt';
import config from '../config';
import { Router } from 'express';
import httpProxy from 'express-http-proxy';

export default () => {
  const routes = Router();

  routes.use(
    jwt({ secret: config.jwtSecret }),
  );

  routes.use(async (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      const helloWorldService = httpProxy(config.helloWorldService);
      helloWorldService(req, res, next);
    } else {
      next();
    }
  });

  return routes;
};