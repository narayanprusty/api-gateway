import config from '../config';
import httpProxy from 'express-http-proxy';

exports.print = async (req, res, next) => {
  const greeterService = httpProxy(config.greeterService, {
    proxyReqPathResolver: function (req) {
      var parts = req.url.split('?');
      var updatedPath = parts[0];
      var queryString = `?name=${req.user.name}`;
      return updatedPath + queryString;
    }
  });

  greeterService(req, res, next);
}