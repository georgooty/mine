(function(){
    'use strict';

    angular.module('diary.demo')
            .directive("projectNote",function(){
             return{
            templateUrl: '/static/project/projectnote.html',
            restrict: 'E',
            controller: ['$scope','$http','$window',function($scope,$http,$window){

//                note = $scope.note;
                var url = '/diary/notes/' + $scope.note.id + '/';
                console.log(url);
                $scope.deleteNote = function(note){
                    if ($window.confirm("Dow you want to delete?")) {


                    $http.delete(url).then(
                        function(){
                            var notes = $scope.project.project_notes;
                            notes.splice(notes.indexOf($scope.note),1);
                        }
                );
                }
                }

                 $scope.IsNewNoteVisible = false;
                $scope.ShowNoteDiv = function(){
                        //If DIV is visible it will be hidden and vice versa.
                                        $scope.IsNewNoteVisible = $scope.IsNewNoteVisible ? false : true;
                }


                $scope.updateNote = function () {
                    $http.put(url,$scope.note );
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
            }]
        }
            });



})();