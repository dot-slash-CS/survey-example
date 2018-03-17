var mongoose = require('mongoose');

var SubmissionSchema = new mongoose.Schema({
  fname: {type: String},
  lname: {type: String},
  birthday: {type: Date},
  comments: {type: String},
}, {timestamps: true});

module.exports = mongoose.model('Submission',
        SubmissionSchema, 'Submission');
