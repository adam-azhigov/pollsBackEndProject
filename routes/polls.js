const { Router } = require('express');
const Polls = require('../models/Poll')
const router = Router()

router.get('/', async (req, res) => {
  const polls = await Polls.find({})
  res.json(polls)
})

router.post('/', async (req, res) => {
  const pollPost = new Polls({
    pollsName: req.body
  })
  await pollPost.save()
  res.json(pollPost)
})

router.get('/polls/:id', async (req, res) => {
  const polls = await Polls.findById({
    where: { userId: req.params.id }
  })
  res.json(polls)
})

router.delete('/polls/:id', async (req, res) => {
  const polls = await Polls.findById({
    where: { userId: req.params.id }
  })
  res.json(polls)
})

module.exports = router