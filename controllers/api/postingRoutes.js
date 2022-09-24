const router = require('express').Router();
const { User, Comment, Posting } = require('../../models');

// The `/api/user` endpoint

router.get('/', async (req, res) => {
  try {
    const allPostings = await Posting.findAll();
    return res.status(200).json(allPostings);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//404 error for Posting not existing
router.get('/:id', async (req, res) => {
  try {
    const singlePosting = await Posting.findOne({
      where: { id: req.params.id },
    });
    return res.status(200).json(singlePosting);
  } catch (error) {
    if (req.status(404)) {
      return res.status(404).json(error);
    }
  }
});

router.post('/', async (req, res) => {
  try {
    const PostingData = await Posting.create(req.body);

    res.status(200).json(PostingData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    Posting.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json();
  } catch (err) {
    res
      .status(400)
      .json({ message: 'Incorrect email or password, please try again' });
    return;
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedPosting = await Posting.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedPosting) {
      return res
        .status(404)
        .json({ message: 'No Posting found with that id.' });
    }
    return res.status(200).json({
      message: 'That Posting has been deleted with that id',
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
