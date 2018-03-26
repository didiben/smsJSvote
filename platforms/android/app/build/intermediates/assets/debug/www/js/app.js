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
    $scope.running = false;
    $scope.smsRecieved = new Array();
    $scope.results1 = 0;
    $scope.results2 = 0;
    $scope.results3 = 0;
    $scope.results4 = 0;
    $scope.results5 = 0;
    $scope.results6 = 0;
    $scope.results7 = 0;
    $scope.SMSlist = function() {
        $ionicPlatform.ready(function() {
            console.log('############# verifyNumbers launched ! #############');
            $scope.running = true;
            var filter = {
                box : 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
                read : 0, // 0 for unread SMS, 1 for SMS already read
                indexFrom : 0, // start from index 0
                maxCount : 500 // count of SMS to return each time
            };
            // if(SMS) SMS.startWatch(function(){
            //     document.addEventListener('onSMSArrive', function(e){
            //         var sms = e.data;
            //         smsList.push( sms );
            //         switch (sms.body) {
            //             case '1':
            //             $scope.results1 = $scope.results1 + 1;
            //             deletenewarrivant(sms.address);
            //             break;
            //             case '2':
            //             $scope.results2 = $scope.results2 + 1;
            //             deletenewarrivant(sms.address);
            //             break;
            //             case '3':
            //             $scope.results3 = $scope.results3 + 1;
            //             deletenewarrivant(sms.address);
            //             break;
            //             case '4':
            //             $scope.results4 = $scope.results4 + 1;
            //             deletenewarrivant(sms.address);
            //             break;
            //             case '5':
            //             $scope.results5 = $scope.results5 + 1;
            //             deletenewarrivant(sms.address);
            //             break;
            //             case '6':
            //             $scope.results6 = $scope.results6 + 1;
            //             deletenewarrivant(sms.address);
            //             break;
            //             default:
            //             $scope.results7 = $scope.results7 + 1;
            //             deletenewarrivant(sms.address);
            //         }
            //     });
            // }, function(){
            //     console.log('Error !!');
            //     $scope.errDisplay = 'SMS not intercepted';
            // });
            // function deletenewarrivant(sender) {
            //     var filter = {
            //         box : 'inbox',
            //         address : sender
            //     };
            //     if(SMS) SMS.deleteSMS(filter, function(n){
            //         console.log('Deleted');
            //     }, function(err){
            //         console.log('Not deleted');
            //         $scope.errDisplay = 'SMS not deleted : ' + err;
            //     });
            // }
            if(SMS) SMS.listSMS(filter, function(data){
                console.log('############# Listing SMS...');
                setTimeout(function(){
                    for (var i = 0; i < data.length; i++) {
                        switch (data[i].body) {
                            case '1':
                            $scope.results1 += 1;
                            $scope.apply();
                            break;
                            case '2':
                            $scope.results2 += 1;
                            $scope.apply();
                            break;
                            case '3':
                            $scope.results3 += 1;
                            $scope.apply();
                            break;
                            case '4':
                            $scope.results4 += 1;
                            $scope.apply();
                            break;
                            case '5':
                            $scope.results5 += 1;
                            $scope.apply();
                            break;
                            case '6':
                            $scope.results6 += 1;
                            $scope.apply();
                            break;
                            default:
                            $scope.results7 += 1;
                            $scope.apply();
                        }
                    }
                }, 60000);
            },
            function(err){
                console.log(err);
                $scope.errDisplay = err;
            });
        });
    };
    // $scope.stopSMSWatch = function() {
    //     $ionicPlatform.ready(function() {
    //         if(SMS) SMS.stopWatch(function(){
    //             console.log('Watch ended');
    //             $scope.watchStopped = '(Watch is over)';
    //         }, function(){
    //             console.log('Watch not ended');
    //             $scope.errDisplay = 'Watch not ended ';
    //         });
    //     });
    // };
}])
