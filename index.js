// module
import express from 'express';
import cors from 'cors';
// import path from 'path';

// data
import dummydata from './data/.dummydata.js';

// methods
import handleData from './src/dataHandler.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, "build")));
// app.use("/api/test", require("./src/api/test"));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});

app.get('*', (req, res) => {
  // console.log(req.url)
  req.body = dummydata;
  const data = handleData(req.body);
  const result = { data, success: false, error: 'NULL PATH.' };
  res.send(result);
});
