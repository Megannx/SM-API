const express = require('express');
const router = express.Router();
const { addReaction, removeReaction } = require('../controllers/reactionController'); 

// POST route to add a reaction to a specific thought
router.post('/:thoughtId/reactions', addReaction); // Use this route to add a reaction

// DELETE route to remove a reaction by its ID
router.delete('/:thoughtId/reactions/:reactionId', removeReaction); // Use this route to remove a reaction

module.exports = router;