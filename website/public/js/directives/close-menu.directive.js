'use strict';

(function(){

  angular
    .module('habitrpg')
    .directive('closeMenu', closeMenu);

  function closeMenu() {
    return {
      restrict: 'A',
      link: function($scope, element, attrs) {
        element.on('blur', function(event) {
          if ($scope.$parent._expandedMenu) {
            $scope.$parent._expandedMenu.menu = null;
          }
          $scope._expandedMenu.menu = null;
          $scope.$apply()
        });
      }
    }
  }
}());
