import { validateRoute } from "../../lib/auth"

export default validateRoute((res, req, user) => {
  res.json(user)
})
