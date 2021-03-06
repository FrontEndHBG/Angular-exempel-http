// controller.js
var app = angular.module('ajaxApp');
app.controller('FirstController', ['$scope', '$http', function ($scope, $http) {
    $scope.name = 'Max';
    $scope.names = ['Max', 'Pelle', 'Calle'];

    $scope.show = function () {
        console.log('HEJ NU VISAS JAG!');
    };

    $scope.showData = function () {
        var url = 'http://jsonplaceholder.typicode.com/posts';
        $http.get(url)
        .then(function (data) {
            $scope.data = data;
            
        });
    };

    $scope.visaBilder = function () {
        var url = 'http://jsonplaceholder.typicode.com/photos';
        $http.get(url)
        .then(function (bilder) {
            // eftersom vad vi får tillbaka är i data array måste vi skriva så här 
            $scope.bilder = bilder.data;
        });
    };


}]);

app.controller('ResultsController', ['$scope', function ($scope) {
    $scope.name = 'Max';
    $scope.results = [
        { name: 'Peter', score: 4 },
        { name: 'Fredrik', score: 14 },
        { name: 'Moses', score: 34 },
    ];
}]);












