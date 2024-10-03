const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');
const formatDate = require('../utils/formatDate'); 

// Define the Thought schema
const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => formatDate(timestamp), // Use the formatDate function
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], // Use the imported reactionSchema
});

// Virtual for Reaction Count
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);
module.exports = Thought;
