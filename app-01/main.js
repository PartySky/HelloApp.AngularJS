var app = angular.module('app', []);

app.controller('myFirstCtrl', function($scope, myFactory) {
    $scope.hello = 'hello';
    $scope.getBookmark = function() {
        return "My bookmark";
    };
    $scope.setHello = function(text) {
        $scope.hello = text;
    };
    $scope.myFactory = myFactory;
});

app.controller('mySecondCtrl', function($scope, myFactory) {
    $scope.myBook = 'Анна Каренина';
    $scope.myFactory = myFactory;
});

app.factory("myFactory", function() {
    return {
        hello: "hello world"
    };
});