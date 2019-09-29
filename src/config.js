export default {
  port: process.env.PORT || 3000,
  helloWorldService: process.env.HELLO_WORLD_SERVICE || 'http://localhost:4000',
  greeterService: process.env.GREETER_SERVICE || 'http://localhost:5000',
  jwtSecret: process.env.JWT_SECRET || 'secret'
};
