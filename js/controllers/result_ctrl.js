angular.module('mockup').controller('resultCtrl',['$scope','$location','$rootScope',function($scope,$location,$rootScope) {
  $scope.resultSet = $rootScope.answeredSet
  $scope.score = 0
  for (var i = 0; i < $scope.resultSet.length; i++) {
    if ($scope.resultSet[i].selected == $scope.resultSet[i].correct) {
      $scope.score++;
    }
  }
  $scope.home = ()=>{
    $location.url('/')
  }
}])
