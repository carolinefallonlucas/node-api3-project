const express = require('express');
const { userParams } = require('../../data/dbConfig');
const Users = require('./users-model')
const Posts = require ('../posts/posts-model')
const router = express.Router();
const mw = require ('../middleware/middleware') 

router.post('/', (req, res) => {
  Users.add(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'error adding new user',
      });
    });
});

router.get('/', (req, res) => {
  Users.find(req.query)
    .then(users => {
      res.status(200).json(users)
    });
});

router.get('/:id', mw.validateUserId, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      if (user)
      {
        res.status(200).json(user);
      } else
      {
        res.status(500).json({
          message: 'error retrieving user',
        })
      }
    });

  router.delete('/:id', mw.validateUserId, (req, res) => {
    // do your magic!
    // this needs a middleware to verify user id
  });

  router.put('/:id', mw.validateUserId, (req, res) => {
    // do your magic!
    // this needs a middleware to verify user id
    // and another middleware to check that the request body is valid
  });

  router.post('/:id/posts', (req, res) => {
    // do your magic!
    // this needs a middleware to verify user id
    // and another middleware to check that the request body is valid
  });

  router.get('/:id/posts', (req, res) => {
    Users.getUserPosts(req.params.id)
      .then(Posts => {
        res.status(200).json(Posts);
    
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Problem getting user posts'
        })
      })
  
  })
})
// do not forget to export the router
  module.exports = router
