const app = require('./index');

app.listen(process.env.PORT, () => {
  console.log(`FEC listening on port ${process.env.PORT}`);
});
