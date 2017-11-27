(function(){
    'use strict',

    angular.module('diary.project',[])
    .controller('DiaryProjectController',
    ['$scope','$http',DiaryProjectController]);

    function DiaryProjectController($scope,$http){

       $scope.project = [];
        $scope.selectProject = function (list) {
        $scope.project = list;
          }
         $scope.data = [];
            $http.get('/diary/projects').then(
                function(response){
                    $scope.data = response.data;
                }
            );
    }



}());