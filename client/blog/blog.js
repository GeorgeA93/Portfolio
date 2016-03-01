/**
 * Created by georgeallen on 29/02/2016.
 */
/**
 * Created by georgeallen on 29/02/2016.
 */
angular.module('portfolio').controller('BlogController', ['$scope', '$log', '$reactive',
    function ($scope, $log, $reactive) {
        $reactive(this).attach($scope);

        this.message = 'Welcome to my blog';

    }]);