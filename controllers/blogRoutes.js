const router = require('express').Router();
const { Comment, Blogpost, User  } = require('../models');
const withAuth = require('../utils/auth')
const dayjs = require('dayjs')

router.get('/', async (req,res) => {
  try {
    const blogPostData = await Blogpost.findAll({
      include: [User]
    })
    const blogPosts = blogPostData.map((blogpost) =>
    blogpost.toJSON()
    );
    for (let i = 0; i < blogPosts.length; i++) {
      blogPosts[i].date = dayjs(blogPosts[i].date).format("dddd MMMM DD, YYYY")
    }

    // const blogPostUsers = await User.findAll()
    // const userName = blogPostUsers.map((user) => user.toJSON())

    console.log(blogPosts)
    // console.log(userName)
    res.render('homepage', {
      blogPosts,
      // userName,
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})


router.get('/sess',  (req, res) => {
  res.json(req.session)
});


router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const myBlogPostData = await Blogpost.findAll({
      where: {
        user_id: req.session.user.id
      },
      include: [User]
    })
    const blogPost = myBlogPostData.map((myblogpost) =>
    myblogpost.toJSON()
    );

    for (let i = 0; i < blogPost.length; i++) {
      blogPost[i].date = dayjs(blogPost[i].date).format("dddd MMMM DD, YYYY")
    }

    

    res.render('dashboard', {
      blogPost,
      loggedIn: req.session.loggedIn,
      layout: 'dashboard.handlebars'
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})

router.get('/createacct', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
    return
  }
  res.render('createacct')
})


module.exports = router;