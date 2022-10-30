const { Router } = require("express");

const router = new Router()

router.get('/test', async (request, response) => {
  response.status(200).json({ message: 'connection success' })
})

module.exports = router