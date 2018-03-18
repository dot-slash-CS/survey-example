var mongoose = require('mongoose'),
    Submission = mongoose.model('Submission');

exports.saveSubmission = (request,response) => {
  var data = request.body;
  var surveyInfo = {
        fname: data.fname,
        lname: data.lname,
        birthday: data.bday,
        comments: data.comments}

  Submission.create(surveyInfo, (err, data) => {
    if (err) {
      console.log(err);
      response.redirect('/');
    } else {
      console.log("Sucess: ",data);
      response.render('index');
    }
  });
}

exports.listAllSubmission = (req,res) => {
  Submission.find({}, (err, data) => {
    if (err) {
      console.log("error ",err);
    } else {
      console.log(data);
      res.render('lists',{submissions:data});
    }
  });
}
