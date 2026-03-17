import { Router } from 'express';
import { createB2B, getAllB2B, deleteB2BById } from './b2bController';

const router = Router();

router.post('/', createB2B);
router.get('/', getAllB2B);
router.delete('/:id', deleteB2BById);

export const B2BRouter = router;
