const surveyAnswers = require('../data/friends.js');

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(surveyAnswers);
  });

  app.post('/api/friends', function (req, res) {
    //grabs the new friend's scores to compare with friends in friendList array
    var scoresArray = [];
    var userScore = req.body.scores;
    var friendCount = 0;
    var bestMatch = 0;

    for (var i = 0; i < surveyAnswers.length; i++) {
      var scoresDiff = 0;

      //run through scores to compare friends
      for (var j = 0; j < userScore.length; j++) {
        scoresDiff += (Math.abs(parseInt(surveyAnswers[i].scores[j]) - parseInt(userScore[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }

    //return bestMatch data
    var bff = surveyAnswers[bestMatch];
    res.json(bff);
    surveyAnswers.push(req.body);
  }); 
};