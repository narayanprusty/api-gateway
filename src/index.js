import "babel-polyfill";
import http from "http";
import express from "express";
import morgan from "morgan";
import routes from "./routes";
import config from "./config";
import middleware from './middleware';

const app = express();
app.server = http.createServer(app);

// logger
app.use(morgan("dev"));

(async () => {
  app.use(middleware());
  
  routes({ app });

  app.server.listen(config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
  });
})();

export default app;
