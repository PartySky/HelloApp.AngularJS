var app = angular.module('app', []);

app.controller('myFirstCtrl', function($scope, myFactory, myFactory02) {
    $scope.hello = 'hello';
    $scope.getBookmark = function() {
        return "My bookmark";
    };
    $scope.setHello = function(text) {
        $scope.hello = text;
    };
    $scope.myFactory = myFactory;
    $scope.myFactory02 = myFactory02;
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

app.factory("myFactory02", function() {
    return {
        hello: function() {
            return "hello world";
        }
    }
})

app.controller('myNestedParentCtrl', function($scope) {
    $scope.showMessage = function() {
        console.log('This is child parent')
    };
});
app.controller('myNestedChildCtrl01', function($scope) {
    $scope.showMessage = function() {
        console.log('This is child 01')
    };
});
app.controller('myNestedChildCtrl02', function($scope) {
    // $scope.showChild02 = function() {
    //     // console.log('This is child 02')
    // };
});