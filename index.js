const express = require('express');
const QRCode = require('qrcode');

const app = express();
const port = 3000;

// Route to generate QR code dynamically for a URL
app.get('/generate', async (req, res) => {
  const url = 'https://enchanting-pika-b4bf8f.netlify.app/'; // Change this to your target URL
  try {
    const qrImage = await QRCode.toDataURL(url);
    res.send(`<h2>Scan this QR Code to visit the website:</h2><img src="${qrImage}" alt="QR Code">`);
  } catch (err) {
    res.status(500).send('Error generating QR code');
  }
});

// When the QR is scanned, this route (if accessed) redirects to your website
app.get('/', (req, res) => {
  res.redirect('https://enchanting-pika-b4bf8f.netlify.app/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
