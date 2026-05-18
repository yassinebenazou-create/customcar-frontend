import { Router } from 'express'
import { listPortfolio } from '../controllers/portfolioController.js'

const router = Router()
router.get('/', listPortfolio)

export default router
