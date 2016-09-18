(function () {
    'use strict';

    angular
        .module('LunchCheck')
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.input = "";
        $scope.dishes = [];
        $scope.message = null;

        var re = /\s*,\s*/;
        $scope.getDishes = function(input) {
            $scope.dishes = extractDishes(input);
            showMessage($scope.dishes);
            showStyle($scope.dishes);
        };

        function showMessage(array) {
            console.log('showMessage: ', array, array.length);
            $scope.message = null;
            if (array.length == 0) {
                $scope.message = 'Please enter data first';
            }
            else if (array.length <= 3) {
                $scope.message = 'Enjoy!';
            }
            else if (array.length > 3) {
                $scope.message = 'Too much!';
            }
        }

        function extractDishes(input) {
            var dishesArray = new Array();
            var tmp = new Array();

            tmp = input.split(re);
            console.log(tmp, typeof tmp, tmp.length);
            tmp.forEach(function (element) {
                if (element != "") {
                    dishesArray.push(element);
                }
            });

            return dishesArray;
        }

        function showStyle (array) {
            $scope.style = null;
            var size = array.length;
            console.log(size);
            if(size == 0){
                $scope.style = {
                    color: "red", 
                    border: "solid red" 
                };
            }
            else {
                $scope.style = {
                    color: "green", 
                    border: "solid green"
                };
            }
        }
    }
})();