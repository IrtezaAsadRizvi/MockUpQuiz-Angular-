
(function () {
  var overlay = document.getElementById("overlay");

  window.addEventListener('load', function(){
    overlay.style.display = 'none';
  })
  var mainApp = angular.module('mockup',['ngRoute'])
  mainApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/',{
      templateUrl : "study_material.html"
    })
    $routeProvider.when('/quiz',{
      templateUrl : "quizFront.html"
    })
    $routeProvider.when('/result',{
      templateUrl : "result.html"
    })
  }])
})()
