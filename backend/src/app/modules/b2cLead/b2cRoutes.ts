import { Router } from 'express';
import { createB2C, getAllB2C, deleteB2CById } from './b2cControllers';

const router = Router();

router.post('/', createB2C);
router.get('/', getAllB2C);

router.delete('/:id', deleteB2CById);

export const B2CRouter = router;
