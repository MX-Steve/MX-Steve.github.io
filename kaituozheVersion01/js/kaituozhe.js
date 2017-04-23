// 搭建angular模块
var app = angular.module('ktz',['ng','ngRoute','ngAnimate']);

//防抖动处理
app.factory('$debounce',
    ['$rootScope', '$browser', '$q', '$exceptionHandler',
        function($rootScope, $browser, $q, $exceptionHandler) {
            var deferreds = {},
                methods = {},
                uuid = 0;

            function debounce(fn, delay, invokeApply) {
                var deferred = $q.defer(),
                    promise = deferred.promise,
                    skipApply = (angular.isDefined(invokeApply) && !invokeApply),
                    timeoutId, cleanup,
                    methodId, bouncing = false;

                // check we dont have this method already registered
                angular.forEach(methods, function(value, key) {
                    if (angular.equals(methods[key].fn, fn)) {
                        bouncing = true;
                        methodId = key;
                    }
                });

                // not bouncing, then register new instance
                if (!bouncing) {
                    methodId = uuid++;
                    methods[methodId] = { fn: fn };
                } else {
                    // clear the old timeout
                    deferreds[methods[methodId].timeoutId].reject('bounced');
                    $browser.defer.cancel(methods[methodId].timeoutId);
                }

                var debounced = function() {
                    // actually executing? clean method bank
                    delete methods[methodId];

                    try {
                        deferred.resolve(fn());
                    } catch (e) {
                        deferred.reject(e);
                        $exceptionHandler(e);
                    }

                    if (!skipApply) $rootScope.$apply();
                };

                timeoutId = $browser.defer(debounced, delay);

                // track id with method
                methods[methodId].timeoutId = timeoutId;

                cleanup = function(reason) {
                    delete deferreds[promise.$$timeoutId];
                };

                promise.$$timeoutId = timeoutId;
                deferreds[timeoutId] = deferred;
                promise.then(cleanup, cleanup);

                return promise;
            }


            // similar to angular's $timeout cancel
            debounce.cancel = function(promise) {
                if (promise && promise.$$timeoutId in deferreds) {
                    deferreds[promise.$$timeoutId].reject('canceled');
                    return $browser.defer.cancel(promise.$$timeoutId);
                }
                return false;
            };

            return debounce;
        }
    ]);

//配置路由词典
app.config(function($routeProvider){

    $routeProvider
        .when('/ktzStart',{
            templateUrl:'tpl/start.html'
        })
        .when('/ktzLogin',{
            templateUrl:'tpl/login.html',
            controller:'loginCtrl'
        })
        .when('/ktzRegister',{
            templateUrl:'tpl/register.html',
            controller:'registerCtrl'
        })
        .when('/ktzMain',{
            templateUrl:'tpl/main.html',
            controller:'mainCtrl'
        })
        .when('/ktzDetail/:kid',{
            templateUrl:'tpl/detail.html',
            controller:'detailCtrl'
        })
        .when('/ktzPay/:kid',{
            templateUrl:'tpl/pay.html',
            controller:'payCtrl'
        })
        .when('/ktzPersonal',{
            templateUrl:'tpl/personal.html',
            controller:'personalCtrl'
        })
        .otherwise({redirectTo:'/ktzStart'});
});
app.controller('parentCtrl',['$scope','$location',
    function($scope,$location){
        $scope.jump = function(desPath){
            $location.path(desPath);
        }
}]);
app.controller('mainCtrl',['$scope','$http','$debounce',function($scope,$http,$debounce){
    $scope.hasMore = true;
    $http
        .get('data/kind_getbypage.php')
        .success(function(data){
            //console.log(data);
            $scope.kindList = data;
        });
    $scope.loadMore = function(){
        $http.get('data/kind_getbypage.php?start='+$scope.kindList.length)
            .success(function(data){
                if(data.length<5){
                    $scope.hasMore = false;
                }
                $scope.kindList = $scope.kindList.concat(data);
            });
    };
    $scope.$watch('kw',function(){
        //console.log($scope.kw);
        $debounce(watchHandler,500);
    });
    watchHandler = function(){
        if($scope.kw){
            $http
                .get('data/kind_getbykw.php?kw='+$scope.kw)
                .success(function(data){
                    //console.log(data);
                    $scope.kindList = data;
                });
        }
    }
}]);
app.controller('detailCtrl',['$scope','$routeParams','$http',
    function($scope,$routeParams,$http){
        $http.get('data/kind_getbyid.php?id='+$routeParams.kid)
            .success(function(data){
                $scope.kind = data[0];
            });
    }]);
app.controller('payCtrl',['$scope','$routeParams','$http',
    function($scope,$routeParams,$http){
        console.log($routeParams);
        $http.get('data/kind_getbyid.php?id='+$routeParams.kid)
            .success(function(data){
                //console.log(data.length);
                if(data.length>0){
                    $scope.kind = data[0];
                }
            });
        $scope.submitOrder = function(){
            console.log($routeParams.kid);
            $scope.oid = localStorage.getItem('oid');
            $http.get('data/class_add.php?kid='+$routeParams.kid+'&oid='+$scope.oid)
            //$http.get('data/class_add.php?kid=1&oid=1')
                .success(function(data){
                    $scope.result = data[0];
                    console.log($scope.result);
                    if(data.length>0){
                        if($scope.result.msg=='succ'){
                            $scope.succMsg = '添加课程成功，订单编号为'+$scope.result.oid;
                        }else{
                            $scope.errMsg = '添加课程失败!';
                        }
                    }
                });
        }
    }]);
app.controller('registerCtrl',['$scope','$httpParamSerializerJQLike','$http','$location',
    function($scope,$httpParamSerializerJQLike,$http,$location){
        $scope.reg = {};
        $scope.loginUser = function(){
            $scope.result = $httpParamSerializerJQLike($scope.reg);
            console.log($scope.result);

            $http.get('data/user_register.php?'+$scope.result)
                .success(function(data){
                    console.log(data);
                    localStorage.setItem('phone',$scope.reg.phone);
                    localStorage.setItem('oid',data[0].oid);
                    //console.log($rootScope.phone);
                });
            $location.path('/ktzLogin');
        }
    }]);
app.controller('personalCtrl',['$scope','$http',
    function($scope,$http){
        //$scope.phone = $rootScope.phone;
        $scope.phone = localStorage.getItem('phone');
        $scope.oid = localStorage.getItem('oid');
        console.log($scope.phone);
        console.log($scope.oid);
        $http.get('data/myclass.php?phone='+$scope.phone)
            .success(function(data){
                console.log(data);
                $scope.orderList = data;
            });
    }]);
app.controller('loginCtrl',['$scope','$http','$location',
    function($scope,$http,$location){
        $scope.loginClick =function(){
            $http.get('data/user_login.php?name='+$scope.name+'&pwd='+$scope.pwd)
                .success(function(data){
                    console.log(data);
                    $location.path('/ktzMain');
                });
        }

    }
]);













