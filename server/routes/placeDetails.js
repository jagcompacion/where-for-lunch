import { Router } from 'express';

import { placeDetails } from '../services/yelp';
import {
  fromSearchPlacesParams,
} from '../lib/placeDetailsHelper';

const router = Router();
router.get('/', async (req, res) => {
  console.log(req.query);
  const data = await placeDetails(req.query.id);
  res.send(fromSearchPlacesParams(data));
});

export default router;
