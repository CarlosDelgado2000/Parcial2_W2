import app from './app';

const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
