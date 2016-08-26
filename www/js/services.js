angular.module('starter.services', ['firebase'])
.factory('Jokes',['$firebaseArray', function($firebaseArray){

  var jokesRef = new Firebase('https://i-have-jokes-bf4f1.firebaseio.com/jokes');
  var jokes = $firebaseArray(jokesRef);
  console.log(jokes);
  return {
     all: function(){
        return jokes;
     },
     get: function(joke){
      var joke = new Firebase('https://i-have-jokes-bf4f1.firebaseio.com/jokes/' + joke.$id);
      return joke;
     }
  };

}]);
