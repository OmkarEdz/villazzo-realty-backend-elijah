module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // keys: env.array('APP_KEYS'),
    keys: ['0xDKCHtHI1jRjVPlAAmV8A==','JgmyTVzHT4xpipS54Z+9eA==','tXyBvWT6xvHZPDhwn9FKTw==','dLkAbzJSZ0OQB+liBMSUIQ==']
  },
});
