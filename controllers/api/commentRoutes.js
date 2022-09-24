const router = require('express').Router();
const { User, Comment, Posting } = require('../../models');

// The `/api/comment` endpoint

router.get('/', async (req, res) => {
  try {
    const allComments = await Comment.findAll();
    return res.status(200).json(allComments);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//404 error for Comment not existing
router.get('/:id', async (req, res) => {
  try {
    const singleComment = await Comment.findOne({
      where: { id: req.params.id },
    });
    return res.status(200).json(singleComment);
  } catch (error) {
    if (req.status(404)) {
      return res.status(404).json(error);
    }
  }
});

router.post('/', async (req, res) => {
  try {
    const CommentData = await Comment.create(req.body);

    res.status(200).json(CommentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json();
  } catch (err) {
    res.status(400).json({ message: 'No comment with that id' });
    return;
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedComment) {
      return res
        .status(404)
        .json({ message: 'No Comment found with that id.' });
    }
    return res.status(200).json({
      message: 'That Comment has been deleted with that id',
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
