const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true
  },
  hitPercentage: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
