angular.module('mockup').controller('quizCtrl',['$scope','$http','$location','$rootScope',function ($scope,$http,$location,$rootScope) {
  $http({
    method: 'GET',
    url: 'data/quiz_questions.json'
  }).then(function (response) {

    //GETTING DATA
    $scope.quizQuestions = response.data
    console.log('questions downloaded')

    //VARS
    $scope.activeQues = 0
    $scope.optionSelected = null
    var home_click_counter = 0

    //SET OPTION
    $scope.setOption = (index)=>{
      $scope.optionSelected = index
      console.log(index + ' selected')
    }

    //CONTINUE
    $scope.continue = () => {
      if ($scope.optionSelected != null) {
        //IF ANY OPTION IS SET
        $scope.quizQuestions[$scope.activeQues].selected = $scope.optionSelected
        console.log($scope.quizQuestions[$scope.activeQues].selected + ' final')
        $scope.optionSelected = null
        if ($scope.activeQues < 9) {
          //CONTINUING TO NEXT QUES
          $scope.activeQues++
          $('#back-to-home-btn-quiz').text('Back to home')
          home_click_counter = 0
          document.getElementById("back-to-home-btn-quiz").style.color = '#F7C134'
          document.getElementById("back-to-home-btn-quiz").style.backgroundColor = '#111214'
        }else {
          //FETCHING RESULT
          $rootScope.answeredSet = $scope.quizQuestions
          $location.url('/result')
        }
      }else {
        //IF NO OPTION IS SET
        console.log('you have to choose an option')
        //animation using animate.css & jquery
        $('#continue').addClass('animated shake')
        $('#continue').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', ()=>{
          $('#continue').removeClass('animated shake')
        })
      }
    }
    //BACK TO HOMEBUTTON
    $scope.home = ()=>{
      if (home_click_counter > 0) {
        $location.url('/')
      }
      home_click_counter++
      $('#back-to-home-btn-quiz').text('Cancel quiz?')
      document.getElementById("back-to-home-btn-quiz").style.color = '#F7F7F7'
      document.getElementById("back-to-home-btn-quiz").style.backgroundColor = '#F73711'
    }
  })
}])
