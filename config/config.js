const config = {
  production: {
    SECRET: process.env.temp123,
    DATABASE: process.env.MONGODB_URI,
  },
  default: {
    SECRET: "temp123",
    DATABASE: "mongodb://localhost:27017/login",
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
