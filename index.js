const express = require('express');
const cors = require('cors');
const leadRoutes = require('./src/routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Bia Leads API funcionando', timestamp: new Date() });
});

app.use('/leads', leadRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;