import { Router } from 'express';
import { authRouter } from '../modules/auth/router';
import { B2CRouter } from '../modules/b2cLead/b2cRoutes';
import { B2BRouter } from '../modules/B2BAgent/b2bRoutes';
import { corporateLeadTravellerRouter } from '../modules/corporateLead/leadRoutes';
const router = Router();
const moduleRoutes = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/b2c',
    route: B2CRouter,
  },
  {
    path: '/b2b',
    route: B2BRouter,
  },
  {
    path: '/corporate-lead',
    route: corporateLeadTravellerRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
