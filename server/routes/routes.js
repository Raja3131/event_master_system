import { getEventManager,postEventManager,updateEventManager,deleteEventManager,getEventManagerById } from "../controllers/EventManagerController.js";

import express from 'express'

const router = express.Router();

router.get('/', getEventManager);
router.post('/', postEventManager);
router.patch('/:id', updateEventManager);
router.delete('/:id', deleteEventManager);
router.get('/:id', getEventManagerById);



export default router;