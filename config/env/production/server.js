module.exports = ({ env }) => ({
    url: env("https://refiner.herokuapp.com"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["cr8zy", "secr8t"]),
    },
  });