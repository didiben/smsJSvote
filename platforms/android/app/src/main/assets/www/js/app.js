// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
.controller('SMSlister', ['$scope', '$ionicPlatform', function($scope, $ionicPlatform){
    $scope.SMSlist = function() {
        $ionicPlatform.ready(function() {
            $scope.log1 = '--> SMSlist launched';
            var filter = {
                box : 'inbox', // 'inbox' (default), 'sent', 'draft'
                indexFrom : 0, // start from index 0
                maxCount : 10, // count of SMS to return each time
            };
            if(SMS) SMS.listSMS(filter, function(data){
                $scope.log2 = '--> SMS sent to me !';
                $scope.log3 = '-----> ' + data;
                $scope.log6 = '--------> ' + data[0].body;
                $scope.log7 = '--------> ' + data[1].body;
                $scope.log8 = '--------> ' + data[2].body;
                $scope.log9 = '--------> ' + data[3].body;
                $scope.log10 = '--------> ' + data[4].body;
                $scope.log11 = '--------> ' + data[5].body;
                $scope.log12 = '--------> ' + data[6].body;
                $scope.log13 = '--------> ' + data[7].body;
            },
            function(err){
                $scope.log4 = '--> SMS not sent...';
                $scope.log5 = '----> ' + err;
            });
        });
    };
}])
