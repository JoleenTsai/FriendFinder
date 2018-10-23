const surveyAnswers = require('../data/friends.js');

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(surveyAnswers);
  });

  app.post('/api/friends', function (req, res) {
    var userScore = req.body;
    var userResponses = userScore.scores;

    // Compute best friend match
    var matchName = '';
    var matchPic = '';
    var totalDifference = 10000;

    for (var i = 0; i < surveyAnswers.length; i++) {
      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(surveyAnswers[i].scores[j] - userResponses[j]);
      }

      // If lowest difference, record the friend match
      if (diff < totalDifference) {

        totalDifference = diff;
        matchName = surveyAnswers[i].name;
        matchImage = surveyAnswers[i].photo;
      }
    }

    // Add new user
    surveyAnswers.push(userScore);
    //Send response
    res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
  });
};