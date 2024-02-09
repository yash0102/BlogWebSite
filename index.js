const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const mongoDb = require('./conn');
const router = require('./routes/blogRoute');
const cors = require('cors');

dotenv.config();
const port = process.env.PORT || 8080;
const dburl = process.env.DB_URI;

const staticPath = path.join(__dirname, 'public');

// Database connect
mongoDb(dburl);

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(express.static(staticPath));


app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.get('/create', (req, res) => {
  res.sendFile(path.join(staticPath, 'create.html'));
});

app.get('/blogs/:id', (req, res) => {
  res.sendFile(path.join(staticPath, 'readblog.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
