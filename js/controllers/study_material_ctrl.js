angular.module('mockup').controller('study_material_ctrl',['$scope','$http','$location',function ($scope,$http,$location) {
  $http({
    method: 'GET',
    url: 'data/study_material.json'
  }).then(function (response) {
    $scope.itemList = response.data
    $scope.activeItem = {}
    $scope.changeActiveItem = (item) => {
      $scope.activeItem = item
    }
    $scope.goToQuizPage = ()=>{
      $location.url('/quiz')
      console.log("quiz started");
    }
  })
}])
