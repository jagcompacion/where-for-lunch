import { Router } from 'express';

import { placeDetails } from '../services/yelp';
import {
  fromSearchPlacesParams,
} from '../lib/placeDetailsHelper';

const router = Router();
router.get('/', async (req, res) => {
  const data = await placeDetails(req.query.id);
  res.send(fromSearchPlacesParams(data));
});

export default router;
