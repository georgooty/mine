(function(){
    'use strict',

    angular.module('diary.demo',["ui.bootstrap.modal"])
    .controller('DiaryProjectController',
    ['$scope','$http','$window',DiaryProjectController]);

    function DiaryProjectController($scope,$http,$window){

        $scope.project = [];
        $scope.selectProject = function (list) {
            $scope.project = list;
            $scope.IsAddButtonVisible = true;
        }

          $scope.deleteProject = function (list) {
          var url = '/diary/projects/' + list.id + '/';
            if ($window.confirm("Do you want to delete?")) {
                $http.delete(url).then(
                    function(){
                       var prj = $scope.data;
                       console.log(prj);
                       console.log(list);
                       prj.splice(prj.indexOf($scope.list),1);
                    }
                );
            }
        }
 $scope.ShowNewPrjDialog = function() {
    $scope.showNewProjectDlg = true;
  };

    $scope.saveProject = function() {


  };

  $scope.cancelProject = function() {
    $scope.showNewProjectDlg = false;
  };
   $scope.cancelEditProject = function() {
    $scope.showEditProjectDlg = false;
  };

  $scope.editProject = function() {
    $scope.showEditProjectDlg = true;
  };


        $scope.data = [];
        $http.get('/diary/projects/').then(
            function(response){
                $scope.data = response.data;
                $scope.selectProject($scope.data[0]);
            }
        );


        $scope.deleteNote = function(note){
            var url = '/diary/notes/' + note.id + '/';
            if ($window.confirm("Dow you want to delete?")) {
                $http.delete(url).then(
                    function(){
                        var notes = $scope.project.project_notes;
                        notes.splice(notes.indexOf($scope.note),1);
                    }
                );
            }
        }

$scope.showNewProjectDlg = false;
$scope.IsAddButtonVisible = false;
        $scope.IsNewNoteVisible = false;
        $scope.ShowNoteDiv = function(){
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsNewNoteVisible = $scope.IsNewNoteVisible ? false : true;
            $scope.new_title= "";
            $scope.new_description= "";
        }
 $scope.showAddPrjDiv = function(){
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsNewProjectVisible = $scope.IsNewProjectVisible ? false : true;
            $scope.new_prj_title= "";
            $scope.new_prj_description= "";
             $scope.showNewProjectDlg = $scope.showNewProjectDlg ? false : true;;
        }

        $scope.updateNote = function (note) {

var url = '/diary/notes/' + note.id + '/';
    console.log(url);
            $http.put(url,note );
        }

         $scope.updateProject = function (project) {
          var url = '/diary/projects/' + project.id + '/';
          console.log(url);
            $http.put(url,project );
            $scope.showEditProjectDlg = false;
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


  $scope.createProject = function(name,description){

  $scope.showNewProjectDlg = false;
             var project = {
                name: name,
                description:description

            };

            $http.post('/diary/projects/', project)
                .then(function (response) {
                console.log(response);
                  $scope.data.push(response.data);
                    $scope.IsNewNoteVisible = false;
                },
                function(){
                    alert('Could not create note');
                }
                );
        }

    }



}());