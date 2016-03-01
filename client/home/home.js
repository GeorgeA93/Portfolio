/**
 * Created by georgeallen on 29/02/2016.
 */
angular.module('portfolio').controller('HomeController', ['$scope', '$log', '$reactive', '$window', '$anchorScroll', '$location',
    function ($scope, $log, $reactive, $window, $anchorScroll, $location) {
        $reactive(this).attach($scope);

        this.browserHeight = $window.innerHeight;

        this.helpers({
            jobs: () => {
                return Jobs.find({});
            },
            projects: () => {
                return Projects.find({});
            }
        });

        this.subscribe('jobs');
        this.subscribe('projects');

        $(window).on("resize.doResize", function () {
            this.browserHeight = $window.innerHeight;
            $scope.$apply();
        });

        $scope.$on("$destroy", function () {
            $(window).off("resize.doResize");
        });

        this.goToAnchor = function (scrollId) {
            if ($location.hash() !== scrollId) {
                $location.hash(scrollId);
            } else {
                $anchorScroll();
            }
        };

    }]);