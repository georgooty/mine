(function(){
    'use strict';

    angular.module('diary.demo')
            .directive("diaryprojectnote",ProjectNoteDirective);

     function ProjectNoteDirective(){
        return{
            templateUrl: "<h1>Made by a directive!</h1>", //'/static/project/projectnote.html',
           restrict: 'E',
            controller: ['$scope','$http',function($scope,$http){
  var url = '/diary/notes/' + $scope.note.id + '/';
  console.log(url);
                 $scope.deleteNote = function(note){

               $http.delete(url).then(
                        function(){
                            var notes = $scope.project.project_notes;
                            notes.splice(notes.indexOf($scope.note),1);
                        }
                    );
                }

          $scope.editNote = function(project){
            }
        $scope.updateNote = function () {

                    $http.put(
                        url,
                        $scope.note
                    );
                };
            }]
        };
     }

})();