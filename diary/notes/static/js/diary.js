(function(){
    'use strict',

    angular.module('diary.demo',[])
    .controller('DiaryProjectController',
    ['$scope','$http',DiaryProjectController]);

    function DiaryProjectController($scope,$http){

$scope.project = [];
        $scope.selectProject = function (list) {
            $scope.project = list;
        }

  $scope.createNote = function(project,title,description){
             var note = {
                project: project.id,
                title: title,
                description:description,
                book_mark:null
            };

            $http.post('/diary/notes/', note)
                .then(function (response) {
                    project.project_notes.push(response.data);
                    $scope.IsNewNoteVisible = false;
                },
                function(){
                    alert('Could not create note');
                }
            );
        }
         $scope.IsNewNoteVisible = false;
        $scope.ShowNoteDiv = function(){
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsNewNoteVisible = $scope.IsNewNoteVisible ? false : true;
        }


        $scope.data = [];
            $http.get('/diary/projects/').then(
                function(response){
                    $scope.data = response.data;
                }
            );
    }



}());