const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());


app.get('/api/test/callCentre/one_stream/sales_orders?', (req, res) => {
  console.log('GET request received at /api');
  res.status(200).json({ message: 'GET request received!' });
});

app.get('/api/test/callCentre/one_stream/campaigns', (req, res) => {
  console.log('GET request received at /api');
  res.status(200).json({ message: 'GET request received!' });
});
 

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
