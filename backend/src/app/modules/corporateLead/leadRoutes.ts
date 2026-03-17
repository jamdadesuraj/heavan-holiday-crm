import { Router } from 'express';
import {
  createCorporateLead,
  getAllCorporateLeads,
  deleteCorporateLeadById,
} from './leadController';

const router = Router();

router.post('/', createCorporateLead);
router.get('/', getAllCorporateLeads);
router.delete('/:id', deleteCorporateLeadById);

export const corporateLeadTravellerRouter = router;
