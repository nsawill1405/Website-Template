const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (CSS, JS, images) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Node.js server!', time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
