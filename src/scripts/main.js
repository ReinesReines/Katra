import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../../')));

app.get('/faq', (req, res) => {
  const faqPath = path.join(__dirname, '../templates/faq.html');
  res.sendFile(faqPath);
});

app.all('/{*any}', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});