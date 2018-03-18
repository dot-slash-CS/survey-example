var survey = require("../controller/surveyController.js");

module.exports = function (app) {

  app.get('/submissionsList', survey.listAllSubmission);
  app.post('/surveysubmit', survey.saveSubmission);

}
