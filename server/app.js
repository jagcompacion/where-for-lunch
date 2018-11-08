import express from 'express';
import places from './routes/places';
import placeDetails from './routes/placeDetails';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.use('/api/places', places);
app.use('/api/place-details', placeDetails);

export default app;
