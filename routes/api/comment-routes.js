const  router = require('express').Router();
const { 
    addComment,
    removeComment,
    addReply,
    removeReply 
} = require('../../controllers/comment-controller');

router
    .route('/:pizzaId')
    .post(addComment);

router
    .route('/:pizzaId/:commentId/:replyId')
    .put(addReply)
    .delete(removeReply)
    .delete(removeComment);

module.exports = router;