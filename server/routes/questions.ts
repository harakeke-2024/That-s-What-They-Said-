import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const question = await db.getQuestionAnswer()
    res.json(question)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
