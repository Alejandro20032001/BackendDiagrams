import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => 
    res.json('obteniendo user')
);
export default router;