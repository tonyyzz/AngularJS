// var app = angular.module("app", []);
// app.directive("myDirective", function () {
//     return {
//         restrict: "EA",
//         template: "<h1>自定义指令</h1>"
//     }
// })

// angular.module('app', []).directive('zl1', [function () {
//     return {
//         restrict: 'AE',
//         template: 'directive',
//         link: function ($scope, elm, attr, controller) {
//             console.log("这是link");
//         },
//         controller: function ($scope, $element, $attrs) {
//             console.log("这是con");
//         }
//     };
// }]).controller('con1', ['$scope', function ($scope) {
//     $scope.name = "aliceqqq";
// }]);

// angular.module("myApp", []).directive("first", [function () {
//     return {
//         restrict: "E",
//         template: "first name:{{name}}"
//     }
// }]).directive('second', [function () {
//     return {
//         scope: true,
//         restrict: "E",
//         template: "second name:{{name}}",
//         controller:function($scope){
//             $scope.name="Doe"
//         },
//         //replace:false
//     }
// }]).controller('directiveController', ['$scope', function ($scope) {
//     $scope.name = "John"
// }])

