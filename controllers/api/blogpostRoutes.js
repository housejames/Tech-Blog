const router = require('express').Router();
const { Comment, Blogpost, User} = require('./models');
// const withAuth = require('../utils/auth')
const dayjs = require('dayjs')

router.post('/', async (req, res) => {
    try {
        const todayDate = new Date()
        const todayDateString = todayDate.toString()
        const newBlogPostData = await Blogpost.create({
            title: req.body.title,
            content: req.body.content,
            date: todayDateString,
            userId: req.body.userId
        });
        res.status(200).json(newBlogPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/new', async (req, res) => {
    console.log(req.session)
        res.render('newpost', {
            loggedIn: req.session.loggedIn,
            user: req.session.user,
            layout: 'dashboard.handlebars'
        })
    
})

router.get('/', async (req, res) => {
    const allBlogPosts = await Blogpost.findAll()
    const allBlogpost = allBlogPosts.map(blogpost=> blogpost.toJSON())
    res.json(allBlogpost)
})

// get one blogpost
router.get('/:id', async (req,res) => {
    try {
      const blogPostData = await Blogpost.findByPk(req.params.id)
      const blogPost = blogPostData.toJSON()
      blogPost.date = dayjs(blogPost.date).format('dddd MMMM DD, YYYY')

      const blogPostComments = await Comment.findAll({
        where: {
            blogpostId: req.params.id
        },
        include: [User]
      })
      const blogPostComment = blogPostComments.map((comment)=>comment.toJSON())
      for (let i = 0; i < blogPostComment.length; i++) {
        blogPostComment[i].createdAt = dayjs(blogPostComment[i].createdAt).format('dddd MMMM DD, YYYY')
        
      }
      
      const userData = await User.findByPk(blogPost.userId)
      const userName = userData.toJSON()
      
    //   checking if the blog post owner and the current logged-in user is the same person and return true or false for handlebar rendering purposes
      let sameUser;
      if (blogPost.userId === req.session.user.id) {
         sameUser = true
      } else {
         sameUser = false
      }

      console.log(sameUser)
      
      console.log(blogPost)
      console.log(blogPostComment)
      console.log(userName)
      res.render('singleblogpost', {
        blogPost,
        userName,
        blogPostComment,
        loggedIn: req.session.loggedIn,
        sameUser: sameUser
        
      })
    } catch (err) {
      console.log(err);
      res.status(500).json(err)
    }
  })

//  adding new comment via put request

router.put('/edit/:id', async (req, res) => {
    try {
        const data = await Blogpost.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        if (data[0]=== 0) {
            return res.status(404).json({msg:"no such blogpost exists!"});
        }
        console.log('hello world')
        res.status(200).json({msg: "Post has been successfully edited"})
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err })
    }
})

router.get('/edit/:id', async (req, res) => {
    try {
        const response = await Blogpost.findByPk(req.params.id)
        const blogEdit = response.toJSON()

        res.render('editpost', {
            blogEdit
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.delete('/:id', (req,res) => {
    Blogpost.destroy({
        where: {
            id: req.params.id,
        }
    }).then((data) => {
        if (data===0) {
            return res.status(404).json({msg:"No such blogpost exists!"})
        }
        res.json(data);
    }).catch(err=> {
        console.log(err);
        res.status(500).json({msg:"error occurred", err})
    })
})



module.exports = router;