import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from './prisma'

export const validateRoute = handler => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies[process.env.TOKEN]

    if (token) {
      let user

      try {
        const { id } = jwt.verify(token, process.env.JWT_PASSPHRASE)
        user = await prisma.user.findUnique({
          where: { id }
        })

        if (!user) {
          throw new Error('Not real user')
        }
      } catch (error) {
        res.status(401)
        res.json({ error: 'Not authorized' })
        return
      }

      return handler(req, res, user)
    }

    res.status(401)
    res.json({ error: 'Not authorized' })
  }
}

export const validateToken = token => {
  const user = jwt.verify(token, process.env.JWT_PASSPHRASE)
  return user
}
