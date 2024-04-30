const router = require('express').Router();
const { Comment } = require('./models');

router.get('/', async (req, res) => {
    const commentData = await Comment.findAll()
    const comments = commentData.map((comment) => 
    comment.toJSON()
    );
    console.log(comments)
    res.status(200).json(comments)
})

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const commentData = await Comment.create({
            content: req.body.content,
            blogpostId: req.body.blogpostId,
            userId: req.session.user.id
        })
        res.status(200).json(commentData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})
// get one comment
router.get('/:id', async (req,res) => {
    try {
      const commentData = await Comment.findByPk(req.params.id)
      const comment = commentData.toJSON()

      res.json(comment)
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err)
    }
  })

//  adding new comment via put request



module.exports = router;